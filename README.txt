REACT SONARQUBE CLASSROOM LAB
Follow SonarQube_Student_Activity.docx in order.
Requirements: Node 24, npm, Git, Jenkins Linux agent, SonarQube Community Build.
1. Extract this folder, then run npm install locally to create package-lock.json.
2. Run npm run coverage and npm run build.
3. Commit the project including package-lock.json to your own GitHub repository.
4. Configure the project key, credentials, tools and webhook as described in the guide.
5. Configure Jenkins as Pipeline script from SCM with script path Jenkinsfile.
6. The SonarQube LAB gate is overall Coverage >= 80 percent.
7. Append tests from solutions/coverage-tests.txt when instructed. Never change the
   threshold or exclude the target code to make the required gate pass.
The test renders a real React component to static HTML and tests its scoring logic.
It does not use jsdom or test browser clicks.
The Dockerfile is retained for your later CD activity; this lab ends at artifact archiving.
The downloaded Jenkinsfile uses checkout scm and therefore requires SCM configuration.
Use unique project keys when sharing a SonarQube server. Change properties accordingly.
Version ranges are resolved by npm install. Commit the generated lockfile so Jenkins
uses the same dependency versions via npm ci.

