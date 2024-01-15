export default function Banner({ title }) {
  return (
    <div>
      <img
        width="800"
        src="https://static.wixstatic.com/media/f61af8_f2b8d6008c40442a8a1f732d12b98301.png/v1/fill/w_980,h_669,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/f61af8_f2b8d6008c40442a8a1f732d12b98301.png"
      />
      <div>{title}</div>
      <h3>
        I m a paragraph. Click here to add your own text and edit me. Let your
        users get to know you.
      </h3>
      <button className="button-primary">Read more</button>
    </div>
  );
}
