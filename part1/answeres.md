1. What would be the ideal process at the beginning of one sprint to determine what to
test for a story?

- Understand and visualize the workflow and the goal of the sprint.
- Prepare the test plan for the entire sprint and create the test strategy for each story.
- Identify the types of testing to be done during the sprint (Functional/Non-Functional)
- Write down the test scope, assumptions and risk of each story.
- Figure out the impacted areas.
- Prepare the automation/manual requirement of the story.
- Prepare the release plan.


2. What needs to be tested on the Backend and how would you test it?

- During backend testing, one should always check for the end to end data flow of the system.
- While testing the backend infrastructure one should consider testing 
  - Schema
  - Database tables
  - Columns
  - Keys and Indexes
  - Stored procedures
  - Triggers
  - Database server validations
  - Validating data duplication
  - API testing

3. What are the pros and cons of having android and iOS automation in the same project?

- Pros:
 - Test scenarios are visible and understandable for both platforms.
 - Test runs under the same repository which ease the CI builds.
 - Test case management becomes easy.
 - Some libraries can be used for both platforms.

- Cons:
  - Both platforms behave differently which is a drawback in to handle both the things as the navigations and handling differ in both platforms.
  - Even if we have proper interfaces and architecture, avoiding conditional logic is difficult making the code less maintainable.

4. What is your strategy to make your automated tests run faster and avoid data conflict?

- Using the proper stub data.
- Initial setup and parallel execution to make things faster.
- Use of CI and virtual machines.

5. What would be your approach to automate an app that supports different languages?

- Testing the app supporting the different languages consists of following scenario's
  - To test the API used by the application to encode the different languages provides the expected output.
  - UI automation should consist of screenshot test to compare the results expected on each build.

6. How do you define the severity of a bug and how would you report them to developers?

- The severity of a bug is defined considering the following things
  - What part of the functionality is broken or affected due to the bug?
  - Impact on the business and the risk if left unfixed.
- To inform the developers, prefer to use the defect management tool used in the project like JIRA.
- Also, inform the developer in person using the communication tools and explain about the defect if required.
- Write the bug summary, steps to reproduce, actual and expected results along with impacted area while writing the bug report.

7. As a QA Engineer, how do you support developers in writing automated tests?

- Assessing the gap to write the automation.
- Creating the right scenario's which does the right assertion.
- Figuring out the negative scenario's.
- Identifying the right place for a scenario in the test pyramid.

8. Consider that an app is missing automated tests - how would you determine what part
of the app requires automation first and how would you report the automation
progress?

- First, start with the basic user journeys to be followed by a user and write the test around that.
- Find the negative and business effective scenario's to reduce the cost of a bug fix in production.
- At last, write the edge cases to make the coverage complete.


9. If an app is presenting performance issues, resulting in high response time in some
situations, how can you help the team handle this matter?

- Create some script to generate those scenario's which reduces the app performance.
- For eg: Identify the memory consumption and memory leaks by the application. if there is any then creating a script which fulls the memory
  will be helpful.

10. How do you see your role during the backlog grooming and planning phases?

- During the backlog grooming and planning phase
  - Contribute to providing the story point which is an effort on the testing side.
  - Aware the team on the impacted areas of a new feature.
  - Testing requirements and time consumption.
  - Coverage and the testing type (Manual and automation efforts)
  - The product owner and the team should be aware of fo any risk as well.

11. Suppose a user is not able to log into the app. How would you debug this issue from a
QA point of view?

- Try to debug the logs first if any useful information related to any device error, application error or network error is available.
- Try to clone the same scenario with the different use cases in which the user is unable to login.

12. What is the ideal release process for mobile apps?

- Create the Release timeline
- Create the recoverability of the app even if it's the first release.
- Start with the Beta test.