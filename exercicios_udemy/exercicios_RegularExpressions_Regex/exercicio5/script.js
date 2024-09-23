const regex = /^[a-z0-9_-]{3,16}$/;

const usernames = [
    "user_123",    
    "user-",       
    "12_abc",      
    "ab",          
    "user!name",   
    "this_is_a_very_long_username", 
    "valid-username" 
  ];
  
  usernames.forEach(username => {
    console.log(`${username}: ${regex.test(username)}`);
  });
  