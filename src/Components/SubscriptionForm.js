import NewsLetter from './NewsLetter/NewsLetter'

const SubscriptionForm = () => {
    return (
        <div className="subscription">
            <div className="container">
                <div className="subscription-form">
                    <h3 className="subscription-title">Join the <br /> Sooth family</h3>
                    <p className="subscription-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>
                    <div className="subscription-newsletter">
                        <NewsLetter placeholder='Your Email' buttonText="Sbuscribe" buttonClass='primary' modifier='primary' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubscriptionForm;