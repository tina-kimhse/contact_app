// 
import express from "express"
const router = express.Router()
import userControl from '../controller/userController.js';
// 요청에 따른 응답 시간 (=성능측정 용도)
const timeLog = (req, res, next) => {
  console.log('Time: ', Date.now())
  next()
}
router.use(timeLog)

// User(연락처) 생성
router.get('/users:id', userControl.findOneUser);
router.post('/user', userControl.createUser);

// User(연락처) 조회
router.get('/users', userControl.findAllusers);

router.delete('/users', userControl.removeAllUsers);
router.delete('/user/:id', userControl.removeUser);

//
router.put('/user', userControl.updateUser )

// module.exports = router; // CommonJS 내보내기 문법 --> 현재는, ESM 방식
export default router;
