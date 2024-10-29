const Button = ({ text, changeFunction }) => <div class="text-box pl-6">
    <a href="#" className="btn btn-white btn-animate font-bold z-50" onClick={() => changeFunction()}>
        {text}
        </a>
</div>

export default Button;