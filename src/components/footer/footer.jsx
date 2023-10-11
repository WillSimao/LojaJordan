import styles from './footer.module.css'


const Footer = () => {
    return (
        <footer className={styles['container-footer']}>
            <span className={styles['text-footer']}>Todos os direitos reservados.</span>
        </footer>
    )
}

export default Footer;