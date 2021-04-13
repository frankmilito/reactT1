// import React from 'react'

// function TodoItems() {
//     return (
//         <div className='todo-items'>
//             <input type="checkbox" />
//             <label>Username</label>
//         </div>
//     )
// }
// export default TodoItems

import React from 'react'

import pic1 from './images/pic01.jpg'
import pic2 from './images/pic02.jpg'
import pic3 from './images/pic03.jpg'
import Contacts from './Contacts'

function TodoItems() {
    return (
        <div >
            {/* <Navbar />
          <MainContent />
          <Footer /> */}
            {/* <Greetings /> */}
            {/* <TodoItems />
          <TodoItems />
          <TodoItems /> */}
            <Contacts
                contact={{ imgUrl: pic1, name: 'Winterfell', phone: '09488377733', Email: ' dexx7lpoes@gmail.com' }}
            />
            <Contacts
                contact={{ imgUrl: pic2, name: 'Mr Joffrey', phone: '09139599065', Email: 'collinsborwn@gmail.com' }}
            />
            <Contacts
                contact={{ imgUrl: pic3, name: 'Mr. Lannister', phone: '0789387733', Email: 'Frankybrowny@gmail.com' }}
            />
        </div>
    )
}


export default TodoItems