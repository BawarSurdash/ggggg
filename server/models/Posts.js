module.exports=(sequelize,DataTypes)=>{
    const Posts=sequelize.define('Posts',{
        title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        description:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        category:{
            type:DataTypes.STRING,
            allowNull:false
        },
        image:{
            type:DataTypes.STRING,
            allowNull:false
        },
        priceText:{
            type:DataTypes.STRING,
            allowNull:false
        }
    })
    return Posts;
}
