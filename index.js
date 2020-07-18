console.log('Before'); //this is an example of synchronous
getUser(1, getDaftarRepository); //make the reference of getDaftarRepository, this is similar from the previous program, but you create the function outside the getUser

function getDaftarRepository(panggilUser){ //this is the function that passed to getUser (line 19) with getUser (line 2)
    //console.log('The User is ', panggilUser);
    getRepositories(panggilUser.gitHubUsername, getDaftarCommit); //the same as before but inside getDaftarRepository to get list of repositories in getRepositories  (line 26)
}

function getDaftarCommit(panggilRepo){
    console.log('Has repository : ', panggilRepo); //the result from call the getRepositories (line 6) called in here from panggilRepo parameter inside getDaftarCommit
    getCommit(panggilRepo[0], displayCommits);
}

function displayCommits(commits){
    console.log(commits);
}

console.log('After');
function getUser(id, panggil){ //panggil is callback parameter or argument
    setTimeout(()=>{//this is an example of Asynchronous program
        console.log("Reading user from database...");
        panggil({ id: id, gitHubUsername: 'Testing' }); //parsing the array result to  getDaftarRepository because it's called or passed as an argument on line 2
    }, 2000); //2 seconds
}

function getRepositories(username, panggil){
    setTimeout( () => {
        console.log('The username ', username);
        panggil(['Repo1', 'Repo2', 'repo3']); //parsing the array result to  getDaftarCommit because it's called or passed as an argument on line 6
    }, 2000);
}

function getCommit(repositori, panggil){
    setTimeout( () => {
        console.log('Commits = ', repositori);
        panggil(['Commit 1', 'Commit 2']); //parsing the array result to  displayCommits because it's called or passed as an argument on line 11
    }, 2000);
}