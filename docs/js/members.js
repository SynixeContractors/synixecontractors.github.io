roles = {
  staff: 700888852142751815,
  senior: 700892038668877844,
  members: 700954650026704906,
  juniors: 700892097775009842,
};
certsList = [[780136967677411389, "Medic"], [780138101834121236, "Grenadier"], [780136990405296128, "EOD"], [780137042180046848, "Autorifleman"], [780137008411705375, "Marksman"]]

function list(x){
  x.forEach((user) => {
    console.log(user);
    let nick = user.nick || user.user.name;
    var iDiv = document.createElement('div');

    if (user.roles.includes(roles.staff)) {
      iDiv.className = 'col-md-2 single-team';
    } else {
      iDiv.className = 'col-md-3 single-team';
    }

    var textContainer = document.createElement('div');
    textContainer.className = 'meta-text mt-30 text-center';
    iDiv.appendChild(textContainer);

    textContainer.innerHTML = '<h4>' + nick +  '</h4>';

    var certs = [];
    if (!user.roles.includes(roles.staff)) {
      for (l = 0; l < certsList.length; l++) {
        for (z = 0; z < user.roles.length; z++) {
          if (user.roles[z] == certsList[l][0]) {
            certs.push(certsList[l][1]);
          }
        }
      }
    }

    textContainer.innerHTML += "<p>" + certs.join(" | ") + "</p>";

    Object.keys(roles).forEach((role) => {
      if (user.roles.includes(roles[role])) {
        document.getElementById(role).appendChild(iDiv);
      }
    });
  });
}
fetch('https://cors-anywhere.herokuapp.com/https://dev.dynulo.com/v1/bot/discord/guild/700888247928356905/members')
.then(response => response.json())
.then(data => list(data));
