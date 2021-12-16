
export const Mailer = () => {
    return (
        <Mailto email="fivestar-inc@hotmail.com" subject="5 Star Question - Your title" body="Your Message">
            fivestar-inc@hotmail.com
        </Mailto>
    );

}

const Mailto = ({ email, subject, body, children }) => {
    return (
        <a style={{ color: '#b1955a' }} href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{children}</a>
    );
  };