import React from "react"
import formStyle from "./createform.module.css"

const CreateAccount=()=>{
    return(
        <div>
            <form action="/" className={formStyle.formBody}>
                <div className={formStyle.sameSection}>
                    <div>
                        <p className={formStyle.title}>First Name</p>
                        <input type="text" placeholder="First Name" className={formStyle.halfCol} required />
                    </div>
                    <div>
                        <p className={formStyle.title}>Last Name</p>
                        <input type="text" placeholder="Last Name" className={formStyle.halfCol} required />
                    </div>    
                </div>
                <div className={formStyle.singleField}>
                    <p className={formStyle.title}>Phone Number</p>
                    <span>+91</span>
                    <input type="text" placeholder="Mobile Number" className={formStyle.fullCol} id={formStyle.phoneNumber} required pattern="[0-9]{10}" />
                </div>
                <div className={formStyle.singleField}>
                    <p className={formStyle.title}>Email Address</p>
                    <input type="email" placeholder="Email Address" className={formStyle.fullCol} required />
                </div>
                <div className={formStyle.singleField}>
                    <p className={formStyle.title}>Bus Registration Number</p>
                    <input type="text" placeholder="Registration Number" className={formStyle.fullCol} required pattern="KA[0-9]{2}[A-Z]{2}[0-9]{4}" />
                </div>
                <div className={formStyle.sameSection}>
                    <div>
                        <p className={formStyle.title}>Start Destination</p>
                        <input type="text" placeholder="Start Destination" className={formStyle.halfCol} required />
                    </div>
                    <div>
                        <p className={formStyle.title}>End Destination</p>
                        <input type="text" placeholder="End Destination" className={formStyle.halfCol} required />
                    </div>
                </div>
                <input type="submit" value="Register" id={formStyle.submit}/>
            </form>
        </div>
    );
}

export default CreateAccount