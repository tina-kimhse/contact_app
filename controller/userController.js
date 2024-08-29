// Node.js v18 LTS 이상에서는 파일이름.js 현식으로 import 해야함
import db from "../models/index.js";

// MVC 패턴

// CB에 CRUD 하는 작업 ==> 자바스크립트 함수(=매소드) ==> 라우터에서 사용할 수 있게
// 작명 : 동사+명사(단수, 복수)
// 비동기 통신 : 

const createUser = async (req, res) => {
    const {name, phone, email, relationship} = req.body; 
    try {
        // console.log(name, phone, email, relationship);
        const result = await db.User.create({
            name,
            phone,
            email,
            relationship
        })

        res.json({
            status: 201,
            result
        });

    } catch (error) {
        console.log('Error : ' + error);
    } 
}
// removeUser, modifyUser, deleteUser
const userCotrol = {
    createUser
}

export default userCotrol;