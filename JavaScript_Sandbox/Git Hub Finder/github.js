
class Github{
  constructor(){
    this.client_id = 'dddcac1675cc7781c620';
    this.client_secret = 'e49862a393f54b30b5cae44b806b256b7bf55f09';
  }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile  =   await profileResponse.json();
    return {
      profile
    }

    
    }
  
}
// Src file
/*
class Github {
  constructor() {
    this.client_id = 'd9308aacf8b204d361fd';
    this.client_secret = '84969aeef73956f4ec9e8716d1840532802bb81b';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}
*/