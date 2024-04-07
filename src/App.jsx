import Square from "./Components/Square"

function App() {

  const data = [
    {
      title: <h3 className="free">FREE</h3>, title2: <h1 className="cost">$0/month</h1>, color: "white", features:
        [
          { name: "Single User",isAvaiable:true },
          { name: "50GB Stroage",isAvaiable:true },
          { name: "Unlimited Public Projects",isAvaiable:true },
          { name: "communit Access",isAvaiable:true },
          { name: "Unlimited Private Projects",isAvaiable:false },
          { name: "Dedicated Phone Support",isAvaiable:false },
          { name: "Free Subdomain",isAvaiable:false },
          {name:"Monthly Status Repots",isAvaiable:false}
      ]
    },
    { title:<h3 className="free">PLUS</h3>,title2: <h1 className="cost">$9/month</h1>, color: "white",features:
        [
          { name: "Single User",isAvaiable:true },
          { name: "50GB Stroage",isAvaiable:true },
          { name: "Unlimited Public Projects",isAvaiable:true },
          { name: "communit Access",isAvaiable:true },
          { name: "Unlimited Private Projects",isAvaiable:true },
          { name: "Dedicated Phone Support",isAvaiable:true },
          { name: "Free Subdomain",isAvaiable:true },
          {name:"Monthly Status Repots",isAvaiable:false}
      ] },
    { title:<h3 className="free">PRO</h3>,title2:<h1 className="cost">$49/month</h1>, color: "white",features:
        [
          { name: "Single User",isAvaiable:true },
          { name: "50GB Stroage",isAvaiable:true },
          { name: "Unlimited Public Projects" ,isAvaiable:true},
          { name: "communit Access",isAvaiable:true },
          { name: "Unlimited Private Projects",isAvaiable:true },
          { name: "Dedicated Phone Support",isAvaiable:true },
          { name: "Free Subdomain",isAvaiable:true },
          {name:"Monthly Status Repots",isAvaiable:true}
      ] },

      ];

  return (
    <>
      <div className="cards">
        {data.map((element, index) => (
          <Square
            key={index}
            width={360}
            height={600}
            message={element.title}
             message2={element.title2}
            background={element.color}
            items={element.features}
          />
        ))}
      </div>
    </>
  )
}

export default App
