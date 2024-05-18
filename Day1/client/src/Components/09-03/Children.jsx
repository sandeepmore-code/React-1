const Children =({students,counter})=>{
  console.log(students,"students")
return(
  <div>
    <h1>Children - {counter}</h1>
    <div>{students.map((std)=>(
        <h1>{std}</h1>
    ))}
    </div>
  </div>
)
}
export default Children;