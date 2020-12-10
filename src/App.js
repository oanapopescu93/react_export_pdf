import IdrExport from './components/idr-export'
function App() {
  var date = new Date();
  var date_text = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear()
  var printed_at = 'Printed report at: ' + date_text;
  var company ='CompanyName';
  var name_pdf = "Event_001"

  return (
    <div className="App">
        <IdrExport button_name={"Export"} company={company} printed_at={printed_at} name_pdf={name_pdf} landscape ='portrait' div_id="printing_area"></IdrExport>
        {/* <div id="printing_area" style={{display: "none"}}>   */}
        <div id="printing_area" > 
        <h1>Title01</h1>
          <p>Text01</p>
          <svg width="100" height="100">
            <circle cx="50" cy="50" r="40" stroke="darkred" strokeWidth="4" fill="red" />
          </svg>
          <img src="https://as2.ftcdn.net/jpg/00/42/98/87/500_F_42988762_JMNpHWOFWnbtCBZeYsRo5PmzD28rIquS.jpg" width="100px"/> 
          {/* <img src="data:image/png;base64,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" width="100px"/>  */}
          <h1>Title02</h1>
          <p>Text02</p>
          <svg width="100" height="100">
            <circle cx="50" cy="50" r="40" stroke="darkgreen" strokeWidth="4" fill="green" />
          </svg>
          <img src="https://as2.ftcdn.net/jpg/00/42/98/87/500_F_42988762_JMNpHWOFWnbtCBZeYsRo5PmzD28rIquS.jpg" width="100px"/> 
          <h1>Title03</h1>
          <p>Text03</p>
          <svg width="100" height="100">
            <circle cx="50" cy="50" r="40" stroke="darkblue" strokeWidth="4" fill="blue" />
          </svg>
          <img src="https://as2.ftcdn.net/jpg/00/42/98/87/500_F_42988762_JMNpHWOFWnbtCBZeYsRo5PmzD28rIquS.jpg" width="100px"/> 
          <h1>Title01</h1>
          <p>Text01</p>
          <svg width="100" height="100">
            <circle cx="50" cy="50" r="40" stroke="darkred" strokeWidth="4" fill="red" />
          </svg>
          <img src="https://as2.ftcdn.net/jpg/00/42/98/87/500_F_42988762_JMNpHWOFWnbtCBZeYsRo5PmzD28rIquS.jpg" width="100px"/> 
          {/* <img src="data:image/png;base64,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" width="100px"/>  */}
          <h1>Title02</h1>
          <p>Text02</p>
          <svg width="100" height="100">
            <circle cx="50" cy="50" r="40" stroke="darkgreen" strokeWidth="4" fill="green" />
          </svg>
          <img src="https://as2.ftcdn.net/jpg/00/42/98/87/500_F_42988762_JMNpHWOFWnbtCBZeYsRo5PmzD28rIquS.jpg" width="100px"/> 
          <h1>Title03</h1>
          <p>Text03</p>
          <svg width="100" height="100">
            <circle cx="50" cy="50" r="40" stroke="darkblue" strokeWidth="4" fill="blue" />
          </svg>
          <img src="https://as2.ftcdn.net/jpg/00/42/98/87/500_F_42988762_JMNpHWOFWnbtCBZeYsRo5PmzD28rIquS.jpg" width="100px"/> 
          <h1>Title01</h1>
          <p>Text01</p>
          <svg width="100" height="100">
            <circle cx="50" cy="50" r="40" stroke="darkred" strokeWidth="4" fill="red" />
          </svg>
          <img src="https://as2.ftcdn.net/jpg/00/42/98/87/500_F_42988762_JMNpHWOFWnbtCBZeYsRo5PmzD28rIquS.jpg" width="100px"/> 
          {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAIDklEQVR4Xu2da4hVVRTHf2dUKhsJ+uT0siyLCqKoVHpoUPQw8kNgrw9SgVpBBTF3VHqoZTjOHYIUelPhB62EPhRODxSyLMqSIqgoK80eM5+EaNRCnRNrzj7jueeeO2efx77n3Jm94TD3zt2Ptdf/rP1Ya+21HWwqFQecUlFjicECUrKXwAJiASkZB0pGjpUQC0jJOFAycqyEWECSc2ANTJ8EM4agow2mutCBepxj32XJ2O/CANAvj3wfgoE26D8Mu5fDr8lbb26J0kpIFWY5MM+Fm4FLc2LLLge2uNBXgS9yqjPXakoDyAKYMNMDYJ4AAZyRa0/rK9snwDjQtxP6NsNRw+1pVV84IM/AqUOwdAgWOXC8FtX5ZzrkwCttsPYR+DP/6vVrLAyQFdDeDsvwnglxJJ8OTAFODDztgc9S/gAwqP7KZ/+7/O/3uAa830VKugehe5VXVdNTIYBUoaKAOLlRjycB09VzFjA5I2sOAnvwZnV5Do9e334BpgLVjM0mLt5UQHphsetJhPC4Lp2kfvCBSNybBAV8YASkvxuX2+NAdye8lKDqTFmbAshaOMWBDQ5cG0WtDD2zgEsydSV94a/xllyNxigXtrmwcCn8lb4VvZLGAemBq/HAODNMkgxLAsRMoE2PXmO5hoCdCpio4cyFvcDCLvjEGBFgVv3eA3c78FpUBy5XYBS1rGrE1H8VKF82yODCPV3wuilQjElIDzzlwGNhws8F5gIyX5Q5ybyyHfgpgkgXVnfB4ybozx2QlTCxHTa4cGeYYBma5pjohcE6P1ZDWbgJFzYdhIUr4UiezecKiAJjuwtXhIm8HrgoT8qbWNe3wIcR7Tnw2SDMzROUXAHpgY1OSDJkBXUTMK2JDDTR1G/AexErMQc2dcJdebWZGyBRc8ZpCoyyzxe6zJR5RUD5I1QgzzklF0CiVlMCxh26PW2xfG9Eg5LL6iszILLPcEDmvpEkw5TM6GNFMsLvi0jKpojhy4U5WfcpmQBRO/BPw5u+BWNgzogTWplTNtcPXXtduDLLjj4TID2wNawOaeXVVBwI4d+jVl+iZumC65LW5edPDYhSFL4YbLgV9xlpGeeXi9qnOLAkrUIyNSBVT4s9orWVHfj8rL1r0fLv1O/o91Q860HilAoQZc/oCba2aAxP4nFclUn+5fpMXWnsKYkBUZY+mdNGjEuiKBT91HhOovcKKST3D8K0pJbHxIBUYTXwqM98UaEvoThjeFleAtESy4QaUt0/XYlQsI5GcyJAxCHhKIh0jNjArwJml4UrBdPxObCjloajE2BaEseJRID0wjoXHvTblA3g4hIYlwrGYaR5MXKJrTdoeXRgfSc8pEujNiDKb+of4AS/crHHFmV21e1gs/OJOXhbbaOHdsIUXb8vbUCqcAsgK7zhJGoRWVnZVM8BWXGFHCfmV+BdHV5pA9IDzztwn1/pxWTYjupQ1sJ5tgLfBOh34YUuuF+nS9qAVL3JfMS981blM6XTyHjLIzvmt2s7va+iaRLSAkQcnwFZRAwnWeo+PN64nLC/z9YvgWfrOHhrAdILq1x4wqfpPLwJxabGHJAJ48fAzw482Qkr4nimBUgVvgoeCRCT7IVxNY/z379T1sUAG3ZV4LI4tsQCIodlJsIvwYoeyMHXNo6wVv9dfImfC3XiCJwdd2goFpBeuMGF9/26xQv99lbnVpPofzPkde/AjZ3wwWjNxwIStpefj3ekyaZ4DvQB3wey6Xg9xgLSC8tcWOPXazW78UD4OcIaYAeWd0J3JgmpgqzgRnQx16AxM+nTPKZzykroo9oerqvE7BhiJaQKbwHitzCcZLiSYcumeA78AGypzba5ArdllRBxvxct+3CS2kyfxozvamvkkGN0MrEH0o6KdzyjYYqVkF7Y7cI5fg33Bk2FrcGXwqiUc3GvBlp34OdOmJEJkKqn3pezlsNJjCHHFdbF1mr4P2B9LckHKiBmpPQSYgFJ/xIYAcQOWekBMTVk1UzqskuX3bpN8RzYh7dEzXVSt8veeMY3ymFq2Ws3hikxMbIxtKqTlGioQ6NB57lcVCdh5eIFeKF6bIrngOzSZdjyU17KRat+j+d9ZA4j6ndroEqHhjEDlZBjTbjJQTFmwhVSrJNDckBMOzlYN6CEmBh1A1LDlnWU0wTFuKOc0GFdSTXRAJrlSmqdrTUxaYqztT2OoIdG044jqNWWPbAzCi5NPbAjdNgjbaNLSdOPtKnVlj30GYFLIYc+hQ57LDpaSgo7Fq2kRAIh28ABCptCAwf474cNrXFMUgoPraFWXBKl2gafiQiSWUjwGbV7t+GZQlNKYeGZhA4bwKwWDYl+XWgAMyUlNsSfwqXwEH/++2GDYIKOvVxH+RLrbK1TiZKUutDiNkysLveO5csNELXy2hgOMT7WAylLyPGuMgZSFkBsqPHkEhEukauE+KBM9u4LGdPB+CXE+GDZg/EH0bbXVaSTltwlJASKvdAlIS5GAfH3KfbKI31UjAMS2NHbS8E0cGkKID4d9tq8eESaCkhAdW8vlmyATSGACC1prl6VTWbwulU5Gux/lzqD1636n+WvRO60V6/GS+dwDns5cS2jCpOQMF72+m6PI6UBJAyQveBec4gpIpscGpoEM4agow2mutCBepxj3+Xt6ndhAOiXR74PwUAb9B+G3XHR3Irom3FdVhk61co0lHbIamWmZqHdApKFewbKWkAMMDVLlRaQLNwzUNYCYoCpWaq0gGThnoGyFhADTM1S5f8K+kiDj4cgYQAAAABJRU5ErkJggg==" width="100px"/>  */}
          <h1>Title02</h1>
          <p>Text02</p>
          <svg width="100" height="100">
            <circle cx="50" cy="50" r="40" stroke="darkgreen" strokeWidth="4" fill="green" />
          </svg>
          <img src="https://as2.ftcdn.net/jpg/00/42/98/87/500_F_42988762_JMNpHWOFWnbtCBZeYsRo5PmzD28rIquS.jpg" width="100px"/> 
          <h1>Title03</h1>
          <p>Text03</p>
          <svg width="100" height="100">
            <circle cx="50" cy="50" r="40" stroke="darkblue" strokeWidth="4" fill="blue" />
          </svg>
          <img src="https://as2.ftcdn.net/jpg/00/42/98/87/500_F_42988762_JMNpHWOFWnbtCBZeYsRo5PmzD28rIquS.jpg" width="100px"/> 
          <h1>Title01</h1>
          <p>Text01</p>
          <svg width="100" height="100">
            <circle cx="50" cy="50" r="40" stroke="darkred" strokeWidth="4" fill="red" />
          </svg>
          <img src="https://as2.ftcdn.net/jpg/00/42/98/87/500_F_42988762_JMNpHWOFWnbtCBZeYsRo5PmzD28rIquS.jpg" width="100px"/> 
          {/* <img src="data:image/png;base64,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" width="100px"/>  */}
          <h1>Title02</h1>
          <p>Text02</p>
          <svg width="100" height="100">
            <circle cx="50" cy="50" r="40" stroke="darkgreen" strokeWidth="4" fill="green" />
          </svg>
          <img src="https://as2.ftcdn.net/jpg/00/42/98/87/500_F_42988762_JMNpHWOFWnbtCBZeYsRo5PmzD28rIquS.jpg" width="100px"/> 
          <h1>Title03</h1>
          <p>Text03</p>
          <svg width="100" height="100">
            <circle cx="50" cy="50" r="40" stroke="darkblue" strokeWidth="4" fill="blue" />
          </svg>
          <img src="https://as2.ftcdn.net/jpg/00/42/98/87/500_F_42988762_JMNpHWOFWnbtCBZeYsRo5PmzD28rIquS.jpg" width="100px"/> 
               
        </div>
    </div>    
  );
}

export default App;