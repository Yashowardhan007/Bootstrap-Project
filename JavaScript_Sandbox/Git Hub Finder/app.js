//Search User

// Init github
const github = new Github;

// Initialize UI

const ui = new UI;
const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup',(e) =>{
  //get input text

  const userText = e.target.value;

  if(userText != ''){
     // console.log(userText);

      // Make Http Call

      github.getUser(userText).then(data => {
        console.log(data);
        if(data.profile.message === 'Not Found'){
          ui.showAlert('User Not Found', 'alert alert-danger');
        }else{
          // Show Profile
          ui.showProfile(data.profile )
        }
      })
  }else{
    //Clear Profile
    ui.clearProfile();
  }
})