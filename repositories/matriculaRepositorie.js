import Turma from "../models/turmaModel.js";
import User from "../models/userModel.js";

const matricularAluno = async (req, res) => {
    const { user, turma } = req.params;

    try {
        const userDB = await User.findByPk(user);
        const turmaDB = await Turma.findByPk(turma);
        await userDB.addTurma(turmaDB);

        res.json({ success: true, data: `Aluno ${userDB.nome} foi matriculado na turma ${turmaDB.name}` })
    } catch (error) {
        res.json({ success: false, data: { message: error.message } })
    }
};

const desmatricularAluno = async (req, res) => {
    const { user, turma } = req.params;

    try {
        const userDB = await User.findByPk(user);
        const turmaDB = await Turma.findByPk(turma);

        if (!userDB || !turmaDB) {
            return res.json({ success: false, data: { message: "Usuário ou Turma não encontrados" } });
        }

        await userDB.removeTurma(turmaDB);

        res.json({ success: true, data: `Aluno ${userDB.nome} foi removido da turma ${turmaDB.name}` });
    } catch (error) {
        res.json({ success: false, data: { message: error.message } });
    }
};

const getAllStudentsByTurma = async (req, res) => {
        const { turma } = req.params;

    try {
        const turmaDB = await Turma.findOne({where: {id: turma}, include: User})

        res.json({ success: true, data: turmaDB })
    } catch (error) {
        res.json({ success: false, data: { message: error.message } })
    }
};

const getAllTurmasByStudent = async (req, res) => {
        const { user } = req.params;

    try {
        const userDB = await User.findOne({where: {id: user}, include: Turma})

        res.json({ success: true, data: userDB })
    } catch (error) {
        res.json({ success: false, data: { message: error.message } })
    }
};

export {
    matricularAluno,
    getAllStudentsByTurma,
    getAllTurmasByStudent,
    desmatricularAluno
};