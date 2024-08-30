//const { Sequelize, DataTypes, Model } = 'requelize');
import { Sequelize, DataTypes, Model } from "sequelize";
import { FOREIGNKEYS } from "sequelize/lib/query-types";
// Sequelize의 defaultValue는 Null

class Memo extends Model {
    static init(sequelize) {
        return super.init(
            {
                // Model attributes are defined here : 시퀄라이즈는 id컬럼을 생성하고 pk로 정의함.
                name: {
                    type: DataTypes.STRING(30),
                    allowNull: false
                    
                },
                user_id: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
                memo: {
                    type: DataTypes.STRING(100),
                    allowNull: false
                    
                },
                created_at: {
                    type: DataTypes.DATE,
                    allowNull: false,
                    defaultValue: DataTypes.NOW()
                }
            },
            {
                // Other model options go here
                sequelize, // DB 연결을 위한 시퀄라이즈 인스턴스
                timestamps: false,
                underscored: true,
                modelName: 'Memo', // 시퀄라이즈 모델 이름
                tableName: 'memo', // 데이터베이스 테이블 이름 (기본값 : 모델이름을 s | 복수형)
                paranoid: false, // 테이블 삭제 후 복구를 원하면 true, 아니면 false (삭제날짜를 기록)
                charset: 'utf8mb4', // 이모지 삽입을 위해서는 utf8mb4 형식
                collate: "utf8mb4_general_ci"
            },
        );
    }
    static associations(db) {
      db.User.belongsTo(db.User, { foreignkey: "user_id", targetkey: "id"});      
    }
}


export default Memo;
// 모델 외부에서 User 정보를 
