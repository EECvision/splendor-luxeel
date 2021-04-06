import { createStructuredSelector } from 'reselect';
import { selectGroupCollectionsForPreview } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';
import CategoryItem from '../banner/category-item';


const NavDropdownLg = ({ toggle, setToggle, collections }) => {
  return (
    <div className={`${toggle ? "h-96" : "h-0"} w-64 fixed top-0 left-0 flex-col items-center justify-start bg-white overflow-hidden px-4 mt-16 ml-20 rounded-b-lg shadow`}>
      <div className="w-full flex items-center justify-start mb-2 cursor-default mt-4">
        <span className="font-medium text-xl mr-2 text-pink-600 lnr lnr-store"></span>
        <div className="text-2xl text-gray-700 font-medium"> Categories</div>
      </div>
      {
        collections.map(({ id, title, routeName }) => (
          <CategoryItem key={id} title={title} routeName={routeName} />
        ))
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectGroupCollectionsForPreview
})

export default connect(mapStateToProps)(NavDropdownLg)