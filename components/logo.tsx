import Link from 'next/link'

const Logo = () => (
  <p className="logo">
    <Link href="/" title="Homepage" id="essenmitsosse">
      <span className="club">&clubs;</span>essenmitsosse <em>presents</em>
    </Link>
  </p>
)

export default Logo
