const john = {
    firstName: 'John',
    lastName: 'Williams',
    birthYear: 1996,
    job: 'student',
    friends: ['Mike', 'Jack', 'Peter'],
    driverLicense: true,
    calAge: function(){
        this.age = 2021 - this.birthYear;
        return this.age;
    },
    getSummary: function(){
        return `${this.firstName} is ${this.calAge()} years old, and he has ${'driverLicense' ? 'a' : 'no'} driver license.`;
    }
}
console.log('---------------- Part A ----------------');
console.log(`${john.firstName} has ${john.friends.length} friends, and his best friend is called ${john.friends[1]}.`);

console.log('---------------- Part B ----------------');
console.log(john.getSummary());

//---------------- Part C ----------------

//open modal window by click buttons
const buttons = document.querySelectorAll('.check');
for(let i=0; i<buttons.length; i++){
   buttons[i].addEventListener('click', function(){
        document.querySelector('.modalWindow').style.display = 'block';
    });
}

const remove = document.querySelectorAll('.close');
for(let i=0; i<remove.length; i++){
    remove[i].addEventListener('click', function(){
         document.querySelector('.modalWindow').style.display = 'none';
     });
     window.onclick = function(event) {
        if (event.target == document.querySelector('.modalWindow')) {
            document.querySelector('.modalWindow').style.display = "none";
        }
    }
 }