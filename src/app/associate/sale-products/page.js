"use client"; 
import { userAppContaxt } from '@/app/contaxtData/userContaxtData';
import TableskeltonLoader from '@/app/skeleton_loader/TableskeltonLoader';
import { baseUrl,checkDiscountApplyTime,currencyCode,main_medium_img_path, variant_medium_img_path1 } from '@/Http/helper'
import { fileBasePath } from '@/Http/urlHelper'; 
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2';

function Page() {

      const {globalUser, setGlobalUser} = useContext(userAppContaxt);
      const [searchText, setSearchText] = useState("");
      const [searchBy, setSearchBy] = useState("sku");
      const [isLoading, setIsLoading] = useState(false);
      const [list, setList] = useState([]);
      const [pagination, setPagination] = useState(null);
    const [currentPage, setCurrentPage] = useState(1)

  
  
         useEffect(() => { 
            const timeoutId = setTimeout(() => { 
             LoadProducts();
            }, 300); 
            return () => clearTimeout(timeoutId); 
          }, [searchText, searchBy, currentPage]);
      
        
          const LoadProducts = async() => { 
            setIsLoading(true)
            const response = await fetch(`/api/influncer-products?page=${currentPage}&searchText=${searchText}&searchBy=${searchBy}`);
  
            setIsLoading(false) 
            const res = await response.json();
            if(res.status){
              setList(res.data.products);
              setPagination(res.data.pagination);
            }else{
              Swal.fire({
                icon:"error",
                text:res.data.message,
                title:"error"
              })
            } 
          }
  
 

          function copyUrl(e, productData){
            e.preventDefault();
             saveShareUrl(productData)
            const newUrl = `https://sellora.com/product-details/${productData.slug}?pId=${productData._id}&vId=${productData.variant._id}&ref=${globalUser.user?.uniqueId}`;

            const input = document.createElement("input");
            input.value = newUrl;
            document.body.appendChild(input);
            input.select();
            document.execCommand("copy");
            document.body.removeChild(input);
              
          }

           function shareUrl(e, productData){
            e.preventDefault();
            saveShareUrl(productData)
            const newUrl = `https://sellora.com/product-details/${productData.slug}?pId=${productData._id}&vId=${productData.variant._id}&ref=${globalUser.user?.uniqueId}`;

             if (navigator.share) {
            navigator
              .share({
                title: "Check this product on Sellora!",
                text: "",
                url: newUrl
              })
              .then(() => {
                console.log("Successful share");
              })
              .catch((error) => {
                console.error("Error sharing:", error);
              });
          } else { 
            alert("Share not supported on this browser.");
          }
          }

   async function saveShareUrl(productData){

      const response = await fetch(`/api/share-product`, {
        method:"POST",
        body:JSON.stringify({
          product_id : productData._id, 
          variant_id : productData.variant._id
        }) 
      })
      
      const res = await response.json();
      if(response.ok){
        console.log("share");
      }

    }


    function paginationFun(newPage, e){
     e.preventDefault();
     setCurrentPage(newPage) 
    }


  return (
    <>
  <div className="rts-navigation-area-breadcrumb pb--10">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="navigator-breadcrumb-wrapper text-center mt--20 mb--20">
            <h3 className="orange text-center">Product Listing</h3>
            {/* <p className="small-text">
              High traffic but low conversions? Optimize content and pricing to
              boost sales!
            </p> */}
          </div>
        </div>
       
      </div>
    </div>
  </div>
  <div className="container">
    <div className="">
      <div className="row">
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="breadcome-heading pb--10">
                <form role="search" className="sr-input-func">
                  <input
                    type="text"
                    placeholder={`Search your product by ${searchBy}`}
                    className="search-int form-control"
                     value={searchText}
                      onChange={(e)=>setSearchText(e.target.value)}
                  />
                  <a href="#">
                    <i className="fa fa-search" />
                  </a>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
             <select  onChange={(e)=>setSearchBy(e.target.value)} value={searchBy}>
                    <option value={"sku"}>SKU</option>
                    <option value={"name"}>Product name</option>
                  </select>
            </div>
          </div>
        </div>
        <div className="clear-fix" />
        <div className="col-lg-6 mt--20 mb--10">
          {/* <div className="all-recommendation">All Recommendation</div> */}
        </div>
      </div>
    </div>
  </div>
  <div className="container mb-5">
    <div>
      <div className="table-responsive fixTableHead">
        <table
          className="table table-bordered table-striped br-none "
          style={{ marginTop: 10 }}
        >
          <thead className="table__head">
            <tr className="winner__table">
              <th width={50}>
                {/* <input type="checkbox" /> */}
              </th>
              <th width={120}>Product</th>
              <th width={300}>&nbsp;</th>
              <th width={300}>SKU and SIN</th>
              <th width={150}>Sale Price</th> 
              <th width={220}>Action</th>
            </tr>
          </thead>
          <tbody>

             {isLoading && (
              <TableskeltonLoader totalRows={7} totalColumns={6} />
            )}

             {!isLoading && list.length === 0 && (
              <tr>
                <td colSpan={10}>
                <div style={{width:"100%", height:"200px", display:"flex", justifyContent:"center",alignItems:"center"}}> Product Not found!</div>

                </td>
              </tr>
            )}
            {!isLoading && list.length > 0  && list.map((product, index)=>(
               <tr className="winner__table" key={index}>
              <td className="text-center">
                {/* <input type="checkbox" /> */}
              </td>
              <td>
                {product.variant.withImage == "Yes"?(
                    <img src={`${fileBasePath}/${variant_medium_img_path1}/${product.variant.image_1}`} 
                    alt='preview01.jpg'
                />
                ):(
                    <img src={`${fileBasePath}/${main_medium_img_path}/${product.main_image}`} 
                    alt='preview01.jpg'
                />
                )}
                
                 
              </td>
              <td>
                <div className="product_details_content">
                  <a target='_blank' href={`https://sellora.com/product-details/${product.slug}?pId=${product._id}&vId=${product.variant._id}&ref=${globalUser.user?.uniqueId}`}
                  style={{textDecoration:"none"}}> 
                    <p>{product.product_name}</p>
                  </a>
                  
                </div>
              </td>
              <td>
                  <div className="product_details_content">
                 <ul>
                    <li>
                      <span>SKU:</span> {product.variant?.sku}
                    </li>
                    <li>
                      <span>SIN:</span> {product.variant?.sin}
                    </li>
                  </ul>
                  </div>
              </td>
              <td className="text-center font-weight">  
                  {currencyCode(product.variant?.currency || "USD")}
                   {(()=>{
                                         if(product?.event?.appliedDiscount){
                                                  const applyEvent = checkDiscountApplyTime(product.event.startDate, product.event.closeDate, product.event.startTime, product.event.closeDate);
                                                if(applyEvent){
                                                  const salePrice = product?.variant.consumerSalePrice;
                                                    const discountedAmont = Number(product?.variant.consumerSalePrice)/100 * Number(product?.event?.appliedDiscount)
                                                    const newSalePrice = salePrice - discountedAmont
                                                    return (
                                                      <> 
                                                         {newSalePrice.toFixed(0)}  
                                                      </>
                                                    )
                                                }else{
                                                     return (
                                                          <> 
                                                             {product?.variant && product?.variant.consumerSalePrice}  
                                                          </>
                                                        )
                  
                                                }
                                                
                                              }
                                    })()}

                </td>
              <td className="text-center font-weight"> 
                <div className='share-copy-icon'>
                <a href='#' title='Copy Product Link' onClick={(e)=>copyUrl(e, product)} >  <i className='fa fa-copy' /> Copy</a> 
                <a href='#' title='Share Product'  onClick={(e)=>shareUrl(e, product)} ><i className='fa fa-share' /> Share</a>
                </div>
              </td>
             
               
            </tr>
            ))}


            
          </tbody>
        </table>
      </div>

       {/* pagination start */}
                           { pagination && pagination.totalPages>1 ?(
                                      <ul className="pagination" style={{float:'right'}}>
                    
                                        
                                      <li className={`page-pre ${pagination.page <= 1? "pointer-events-none opacity-50 deactive_btn":""}`}>
                                        <Link href="#" onClick={(e)=>{
                                          if(pagination.page > 1){ 
                                            paginationFun((pagination.page-1), e)
                                          }else{
                                            e.preventDefault();
                                          }
                                        }
                                          }>
                                          <i className="fa-solid fa-arrow-left" />
                                        </Link>
                                      </li>
                                       
                    
                                {Array.from({length:pagination.totalPages}, (_, i)=>{
                                    if (Math.abs(pagination.page - (i + 1)) <= 3) {
                                      return ( 
                                        <li className={`page-number current  ${i} ${pagination.page== (i+1)?'active':''}`} key={i} >
                                            <a   href="#"  onClick={(e)=>paginationFun((i+1), e)}>
                                              {i + 1} 
                                            </a>
                                        </li> 
                                      );
                                    } 
                                    return null; 
                                   })} 
                                      
                                      <li
                                          className={`page-next ${pagination.page == pagination.totalPages ? "pointer-events-none opacity-10 deactive_btn" : ""}`}
                                        >
                                          <Link
                                            href="#"
                                            onClick={(e) => {
                                              if (pagination.page < pagination.totalPages) {
                                                paginationFun(parseInt(pagination.page) + 1, e);
                                              } else {
                                                e.preventDefault();
                                              }
                                            }}
                                          >
                                            <i className="fa-solid fa-arrow-right" />
                                          </Link>
                                        </li>
                                      </ul>
                                  ):null}
                    
                                  {/* pagination end */}
    </div>
  </div>
</>

  )
}

export default Page