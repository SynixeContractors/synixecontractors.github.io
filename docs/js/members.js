roles = [[700888852142751815, "staff"], [700892038668877844, "senior"], [700892097775009842, "juniors"], [700954650026704906, "members"]]
certsList = [[780136967677411389, "Medic"], [780138101834121236, "Grenadier"], [780136990405296128, "EOD"], [780137042180046848, "Autorifleman"], [780137008411705375, "Marksman"]]

function list(x){
  for (i=0; i<x.length; i++){
    if(x[i].nick){
      var iDiv = document.createElement('div');
      iDiv.id = 'member';

      if(x[i].roles[0] == 700888852142751815){iDiv.className = 'col-md-2 single-team';}
      else{iDiv.className = 'col-md-3 single-team';}

      var textContainer = document.createElement('div');
      textContainer.className = 'meta-text mt-30 text-center';
      iDiv.appendChild(textContainer);

      textContainer.innerHTML = '<h4>' + x[i].nick +  '</h4>';
      var certs = [];
      for(l = 0; l < certsList.length; l++){
        for(z = 0; z < x[i].roles.length; z++){
          if (x[i].roles[z] == certsList[l][0]){
            certs.push(certsList[l][1]);
          };
        };
      };

      textContainer.innerHTML += "<p>" + certs.join(" | ") + "</p>";

      for (j = 0; j < roles.length; j++){
        if (x[i].roles[0] == roles[j][0]){document.getElementById(roles[j][1]).appendChild(iDiv)};
      };
    };
  };
};
fetch('https://cors-anywhere.herokuapp.com/https://dev.dynulo.com/v1/bot/discord/guild/700888247928356905/members')
.then(response => response.json())
.then(data => list(data));
