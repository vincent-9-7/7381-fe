const header = () => {
  // const level = localStorage.getItem('authLevel')
  // const person = level === 'user' ? 'user':'employee'
  // const {token} = JSON.parse(localStorage.getItem(`${person}Info`)).data
  const Header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    // "Access-Control-Allow-Origin": '*',
    // 'crossDomain': true,
    // 'Authorization': token
  };
  return { headers: Header };
};
export default header;
