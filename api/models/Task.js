module.exports={
    attributes:{
        id : {
            type : 'integer',
            primaryKey: true,
            autoIncrement:true
        },
        task : {
            type : 'string'
        },
        status :{
            type : 'integer'
        },
        createdAt:{
            type:'datetime'
        },
        updatedAt:{
            type:'datetime'
        }
    }
};
