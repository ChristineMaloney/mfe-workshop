# Day 4 notes

## When do you know when to use events?
- onSomething is an event (onClick, onHover, onChange, etc)
- you could also have an event that is a timeout
- any change event can be written as a function with no paramters OR a function with (e: ChangeEVent<HTMLSelectElement>)
    -    e.g.: const changeCountry = (e : ChangeEvent<HTMLSelectElement>) => {

(OpenQ) when to use custom event?

When y0u change a stateful variable, causes a x (not rerender can't remember word ** )

## Performance
- React - only look into performance when you are having performance issues 
- Performance features: 
    - Control when code is and isn't rerun (hooks: useMemo useCallback, memo)

## CORS
- security protection built into browser
- if you mkae a request that is coming from a browser, it is preventing something malicious getting into your webpage selling data to some other place
- It will go to the server first and say "am i allowed" Server has to send back certain headers 

https://payments.multicode.uk/swagger-ui/

## useRef
- you can use useRef to bypass the way you are supposed to do forms 
- for example on the first field on the form, you can give the box focus (html)

## point of label (html)
- ADA - htmlFor
- widens clickable area for that object

## useReducer

## routing
npm install react-router-dom

syntax changed from version 5 -> 6

## Context
createContext


# MFEs
What are MFEs?
don't be dissolutioned by the idea of micro (small) shouldn't do as many small ones as possible




# post training ideas
jest sample - rowan/stephb
linting - chris?


