import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { User} from '../models/relations.js';

const login = async (req, res) => {
    
    try{
        const {email, password} = req.body;

        if (!email || !password){
            return res.status(400).json({success: false, message: 'digite Email ou senha validos'})
        }

        const user = await User.findOne({where: {email: email}});

        if(!user) {
            return res.status(401).json({success: false, message: 'usuário não cadastrado'})
        }

        const logado = await bcrypt.compare(password, user.password);

        if(!logado){
            return res.status(401).json({success: false, message: 'Email ou senha incorretos'})
        }

        const token = jwt.sign({id: user.id, email: user.email},
            "meutoken",
            {expiresIn: '12h'}
         );

        return res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            path: '/',        
        }).json({success: true, message:"cookie definido"});
      
        /*  return res.json({
            success: true,
            data: {
                user: {id: user.id, nome: user.nome, email: user.email},
                token,
            },
        });*/
        

    }catch (error){
        return res.status(500).json({success: false, message: error.message})
    }

}

export {login}
