const linksSocialMedia = {
  github: 'AtilaCSilva',
  youtube: 'Rocketseat',
  instagram: '@Rocketseat',
  facebook: 'Rocketseat',
  twitter: 'Rocketseat'
}

function changeSocialMedialinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMedialinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      bioModific.textContent = data.bio
      userGithub.href = data.html_url
      userPhoto.src = data.avatar_url
      userNameLogin.textContent = data.login
    })
}

// O fetch vai bater na porta da url API e pegar o json  que a API responde e vai trazer aqui para dentro (O Fetch não sabe que o retorno vai ser um json)

getGithubProfileInfos()
