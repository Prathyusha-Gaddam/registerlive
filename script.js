const email=document.getElementById('email');
email.addEventListener('input',()=>validate(email));
const submit=document.getElementById('submit');
submit.addEventListener('click',()=>validate(email));

function validate(element){
    if(element.validity.typeMismatch){
        element.setCustomValidity("The Email is not in the right format!!!");
        element.reportValidity();
    }
    else{
        element.setCustomValidity('');
    }
}

let userForm=document.getElementById("user-form");

           const retrieveEntries=()=>{
                let entries=localStorage.getItem("user-entries");
                if(entries){
                    entries=JSON.parse(entries);
                }
                else{
                    entries=[];
                }
                return entries;
            }
            let userEntries=retrieveEntries();
           const displayEntries=()=>{
                const entries=retrieveEntries();

                const tableEntries=entries.map((entry)=>{
                    const nameCell=`<td class='border px-4 py-4'>${entry.name}</td>`;
                    const emailCell=`<td class='border px-4 py-4'>${entry.email}</td>`;
                    const passwordCell=`<td class='border px-4 py-4'>${entry.password}</td>`;
                    const dobCell=`<td class='border px-4 py-4'>${entry.dob}</td>`;
                    const acceptTermsCell=`<td class='border px-4 py-4'>${entry.acceptTerms}</td>`;
                    const row=`<tr>${nameCell} ${emailCell} ${passwordCell}  ${dobCell} ${acceptTermsCell}</tr>`;
                    return row;
                    
                }).join("\n");
              const table=`<table class="table"><tr>
                <th class="px-4 py-2 font-bold">Name</th>
                <th class="px-4 py-2">Email</th>
                <th class="px-4 py-2">Password</th>
                <th class="px-4 py-2">dob</th>
                <th class="px-4 py-2">accepted terms?</th>
                </tr>${tableEntries}</table>`;

            
           let details=document.getElementById("user-entries");
           details.innerHTML=table; 
            }
        //   let userEntries=[];
            const saveUserForm=(event)=>{
                event.preventDefault();
                console.log("hello");
                const name=document.getElementById('name').value;
                console.log(name);
                const email=document.getElementById('email').value;
                const password=document.getElementById('password').value;
                const dob=document.getElementById('dob').value;
                const acceptTerms=document.getElementById('acceptTerms').checked;

                const entry={
                    name,
                    email,
                    password,
                    dob,
                    acceptTerms
                };
                userEntries.push(entry);
               localStorage.setItem("user-entries",JSON.stringify(userEntries));
               displayEntries();
            }
            userForm.addEventListener("submit",saveUserForm);
            displayEntries();
