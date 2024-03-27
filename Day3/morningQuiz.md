1.  what is meant by the phrase of SPA?
- 1 html file with script references.  Just one roundtrip. Illusion of multiple pages 
2. what is the command to create a react application?
- npx create-react-app app-name --template typescript
3. what do we mean by transpiling?
- trnaslating and compiling  - converting TS + JSX to a JavaScript so browser can run it
4. why do we need a web server to be running when we are developing a react applkication, and how do we start one?
- npm start
- see the changes we are making
5. what is the main rule you must follow when creating a JSX statement?
- needs closing tag 
- must return what will become valid html
- Return (
    <>
    <p/>
    <p/>
    </>)
6. In JSX, you can't use the keywords class or for - what do we need instead?

className
htmlFor

7. how would you apply the following style to a div in JSX?

color: #f00;
width: 200px

return(<div> style={{color:"#f00", width:"200px"}}>something here</div>;)

8. If you create a component called Student, how would you: - a.  pass the properties of "name" and "studyGroup" from the parent componet to an instance of the Student component?

if using ts, we might create a props type 
Props

<Student name="Jo" studyGroup = "Geography"/>

b. how would you access the properties within the student component?

Const Student = (props: StudentProps) : JSX. Element=> {
    Return(
        <h2>{Props.name}</h2>
}

9. if you create a .css file for a component, what is the scope?
global

10. what data type does a component need to return?
- JSX.Element