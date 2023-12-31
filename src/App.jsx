import './App.css'
import Card from './Components/Card'

export default function App() {
  let myInfo = {
    name: "Vaibhav Shrivastav",
    age: 21,
    email: "vaibhavshrivastav51@gmail.com",
    phone: 123456789,
    address: "New Delhi India",
    hobbies: ["Coding", "Reading", "Gaming"],
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"]

  }
  return (
    <>
      <h1 className='bg-green-400 text-black mx-8 rounded-xl text-center mb-4'>Test Talwind and Use React Props</h1>

      <Card channelName="Code With Harry" someObj={myInfo} btnText="Click me" />
      <Card channelName="Sherians Coding School" btnText="Visit me" />



      {/* <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/1188751/pexels-photo-1188751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="384" height="512" />
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure> */}
    </>
  )
}
