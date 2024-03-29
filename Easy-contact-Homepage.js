fetch('https://randomuser.me/api/?results=10')
    .then(response => response.json())
    .then(data => {
        data.results.forEach(user => {
            const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
            const proficiency = `${user.location.city}, ${user.location.country}`;

            const userDiv = document.createElement('div');
            userDiv.classList.add('main-contacts');
            userDiv.innerHTML =
                `<img class="profile-pic rounded-circle" src="${user.picture.medium}" alt="user picture" style="height: 50px; width: 50px;">
          <div class="name-pro d-flex flex-column align-items-center justify-content-center">
              <p class="Full-Name">${fullName}</p>
              <p class="text proficiency">${proficiency}</p>
          </div> `;
            document.getElementById('main-contacts').appendChild(userDiv);
        });
    })
    .catch(error => console.error('Error fetching data:', error));