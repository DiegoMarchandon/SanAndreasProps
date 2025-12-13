import Image from "next/image";

export default function Footer(){
    return (
        <div>
        <footer>
            <div className="TermsYcond">
                <a href="https://pedco.uncoma.edu.ar/mod/page/view.php?id=6882">Términos y condiciones</a>
            </div>
            <div className="logos">
                <a href="https://github.com/DiegoMarchandon">
                    <Image src="/public/GitHub-Emblem.png" alt="imagen github" width={50} height={50}/>
                </a>
            </div>
        </footer>
        </div>
    );
}