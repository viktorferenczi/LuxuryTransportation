
export const Mailer = () => {
    return (
        <>
            <a target="_blank" href={`mailto:fivestar-inc@hotmail.com?subject=Contact&body=Your message...`} className="fa fa-envelope email-icon"></a>
            <Mailto email="fivestar-inc@hotmail.com" subject="5 Star Question - Your title" body="Your Message">
                fivestar-inc@hotmail.com
            </Mailto>
        </>
    );
}

const Mailto = ({ email, subject, body, children }) => {
    return (
        <a target="_blank" style={{ color: '#b1955a', paddingLeft:'1rem', textDecoration:"none" }} href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{children}</a>
    );
  };