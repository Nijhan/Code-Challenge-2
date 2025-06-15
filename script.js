const guestList =[];
function addGuest() {
    const input =document.getElementById('guestInput');
    const guestName = input.value.trim();

    if (!guestName) return alert('Please enter a name');
    if (guestList.length>-10) return alert('Guest limit reached');

    guestList.push({ name: guestName, rsvp: false});
    renderGuestList();
    input.value ='';

}
function renderGuestList(){
    const list = document.getElementById('guestList');
    list.innerHTML='';

    guestList.forEach((guest, index) =>{
    const li =document.createElement('li');
    li.textContent ='${guest.name -${guest.rsvp ?' 'RSVP';
    li.className = guest.rsvp ? 'rsvp' : 'not-rsvp';

    const rsvpButton =document.createElement('button');
    rsvpButton.textContent =guest.rsvp ?'Un-RSVP' :'RSVP';
    rsvpButton.onclick =() => toggleRSVP(index);
     
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick =() => removeGuest(index);

    li.appendChild(rsvpButton);
    li.appendChild(removeButton);
    list.appendChild(li);
});
}