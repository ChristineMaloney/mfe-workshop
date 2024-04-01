
# What the container should do?
- Dictate module federation (webpack) vs single-spa
- Host minimal stateful data (i.e. token to get state from backend or basic user info)
- Allow for framework independence (React, Angular, Svelt, etc)
- Own: 
    - url structure
    - top level navigation 
- Provide Best Pratice for:
    - UX consistency (i.e. styling, user process (e.g. delete button  providing an "are you sure?" confirmation)
- Interactions between a container and container's MFEs should be event driven (with exception of url parameters)
- Authentication: Store UserState in Container
    - Can have separate MFE that is in charge of auth/refresh
    - Share as little data as possible with MFE (share user state from container to MFEs (i.e. security token))
- CSS rules in the container application bc CSS Globally scoped (only put in MFEs if they are carefully named)

# What the container shouldn't do?
- couple MFE dependencies (make them not independently deployable)

# What is containers here not doing?