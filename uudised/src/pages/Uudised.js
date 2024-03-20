import toast, { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom';

function Uudised() {

  const uudised = JSON.parse(localStorage.getItem("uudised")) || [];


    // toast.success("Uudised ilmuvad peagi", {
    //     style: {
    //       border: '1px solid #713200',
    //       padding: '16px',
    //       color: '#713200',
    //       duration: 5000
    //     },
    //     iconTheme: {
    //       primary: '#713200',
    //       secondary: '#FFFAEE',
    //     },
    //   });

    //   toast.success("Uudised ilmuvad peagi", {
    //     style: {
    //       border: '1px solid #713200',
    //       padding: '16px',
    //       color: '#713200',
    //       duration: 5000
    //     },
    //     iconTheme: {
    //       primary: '#713200',
    //       secondary: '#FFFAEE',
    //     },
    //   });

    //   toast.success("Uudised ilmuvad peagi", {
    //     style: {
    //       border: '1px solid #713200',
    //       padding: '16px',
    //       color: '#713200',
    //       duration: 5000
    //     },
    //     iconTheme: {
    //       primary: '#713200',
    //       secondary: '#FFFAEE',
    //     },
    //   });

    //   toast.success("Uudised ilmuvad peagi", {
    //     style: {
    //       border: '1px solid #713200',
    //       padding: '16px',
    //       color: '#713200',
    //       duration: 5000
    //     },
    //     iconTheme: {
    //       primary: '#713200',
    //       secondary: '#FFFAEE',
    //     },
    //   });
      
    //   toast.success("Uudised ilmuvad peagi", {
    //     style: {
    //       border: '1px solid #713200',
    //       padding: '16px',
    //       color: '#713200',
    //       duration: 5000
    //     },
    //     iconTheme: {
    //       primary: '#713200',
    //       secondary: '#FFFAEE',
    //     },
    //   });

    
    return ( <div>
        <div>See on uudiste leht, nähtav aadressil localhost:3000/uudised aadressil</div>
        <br /><br />

        {uudised.map((uudis, index) => <div key={index}>
          {uudis}
          <br /><br />
          <Link to={"/yks-uudis/" + index}>
          <button>Vaata lähemalt</button>
          </Link>
        </div> )}

        {uudised.length === 0 && <div>Ühtegi uudist hetkel pole! Lisame õige pea.</div>  } 
        <Toaster />
        
    </div> 
    );
}

export default Uudised ;
