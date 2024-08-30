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
// removeUser, modifyUser, deleteUser,  +  
const findAllusers = async (req, res) => {
    try {
         const user = await db.User.findAll();
         
         res.json({
            status: 200,
            user
         })
    } catch (error) {
        console.log("에러메세지 : " + error);
    }
    
}

const findOneUser = async (req, res) => {
    try {
        const foundUser = await db.User.findAll({
            where: {
                id: req.params.id
            }
        });  

        if (!foundUser) {
            res.json({
                status: 500,
                user //
            })
        } else {
            res.json({
                starus: 20,
                data: foundUser
            })
        }
    } catch (error) {
        console.log(error);
    }
}
        
const updateUser = async (req, res) => {
    try {
        const result = await db.User.update(
            { email: req.body.email })
            {
                where: {
                    id: req.body.id
                }
            }
    } catch (error) {
        console.log(error);
    }
}
const removeUser = async (req, res) => {
    try {
        const removeUser = await db.User.destroy({
            where: {
                id: req.params.id
            }
        });
    } catch (error) {
        console.log(error);
    }
}

const removeAllUsers = async (req, res) => {
    try {
        const removeUser = await db.User.destroy({
            truncate: true
    })
    } catch (error) {
        console.log(error);
    }
}

const userCotrol = {
    createUser,
    findAllusers,
    findOneUser,
    updateUser,
    removeUser,
    removeAllUsers
}

export default userCotrol;