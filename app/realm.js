let rlm = new Realm({
      schema: [{name: 'Users', properties: {username: 'string', password: 'string'}}]
    })

export default rlm;
