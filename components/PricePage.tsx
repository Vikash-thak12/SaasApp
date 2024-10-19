import { pricingTiers } from "@/data"
import { FaCheck } from "react-icons/fa";

const data = pricingTiers;

const PricePage = () => {
    return (
        <section className="py-12 px-4" id="pricing">
            <div>
                <h2 className="font-bold text-center text-5xl">Pricing</h2>
                <p className="section-desc py-5">Free Forever. Upgrade for unlimited tasks, better security and exclusive features</p>
                {/* <div className="flex flex-col md:flex-row px-6 md:items-end justify-center gap-5 lg:px-48"> */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:px-48">
                    {
                        data.map((item, index) => (
                            <div key={index} className="shadow-lg shadow-gray-600 flex flex-col items-start px-4 py-2 gap-4 rounded-lg h-auto">
                                <h1 className="font-bold text-3xl">{item.title}</h1>
                                <h2><span className="font-bold text-2xl">${item.monthlyPrice}</span> /month</h2>
                                <button className="btn btn-primary w-full">{item.buttonText}</button>
                                <ul className="flex flex-col gap-1">
                                    {
                                        item.features.map((val, index) => (
                                            <li key={index} className="flex items-center gap-5">
                                                <FaCheck />
                                                {val}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default PricePage
