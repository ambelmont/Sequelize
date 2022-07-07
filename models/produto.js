module.exports = (sequelize, dataTypes) => {

    const produto = sequelize.define(
        'Produto', 
        {
            // Model attributes are defined here
          id: {
            type: dataTypes.INTEGER,
            primaryKey: true
          },
          nome: {
            type: dataTypes.STRING
          },
          preco: {
            type: dataTypes.FLOAT
          }
         
        }, 
        {
            tableName: 'produto',
            timestamps: false
        }
    )


    return models
}