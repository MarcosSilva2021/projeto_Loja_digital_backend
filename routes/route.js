import express from 'express';
import { alterUser, createUser, deleteUser, getAll, getByName, getOne} from '../repositories/userRepositorie.js';
import { alterTurma, createTurma, deleteTurma, getTurma } from '../repositories/turmaRepositorie.js';
import { desmatricularAluno, getAllStudentsByTurma, getAllTurmasByStudent, matricularAluno } from '../repositories/matriculaRepositorie.js';

const router = express.Router();

// rotas do Usuário
router.route("/v1/user").post(createUser);
router.route("/v1/user").get(getAll);
router.route("/v1/user/:name").get(getByName);
router.route("/v1/user/id/:user").get(getOne).put(alterUser).delete(deleteUser);

// rotas da turma
router.route("/v1/turma").post(createTurma);
router.route("/v1/turma{/:turma}").get(getTurma).put(alterTurma).delete(deleteTurma);

// rotas da matricula
router.route("/v1/matricula/:user/:turma").post(matricularAluno).delete(desmatricularAluno);
router.route("/v1/matricula/turma/:turma").get(getAllStudentsByTurma);
router.route("/v1/matricula/user/:user").get(getAllTurmasByStudent);


export default router;