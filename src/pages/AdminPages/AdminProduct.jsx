import React from 'react'
import { Link } from "react-router-dom";
import { Publish } from "@material-ui/icons";
import styled from "styled-components";
import { AdminChart } from '../../components/AdminParts/AdminChart';


const AdminProduct = () => {
    return (
        <ItemContainer>
            <ItemTitleContainer>
                <h1>Edit Product</h1>
                <Link to="/newproduct">
                    <ItemAddButton>Create</ItemAddButton>
                </Link>
            </ItemTitleContainer>
            <ProductTopContainer>
                <TopLeftContainer>
                    <AdminChart data={1} dataKey="Sales" title="Sales Performance" />
                </TopLeftContainer>
                <TopRightContainer>
                    <InfoTopContainer>
                        <ItemShowImg mr src="https://picsum.photos/200/300/?random=1" alt="show-image" />
                        <span className="productName">Mac Mini M1</span>
                    </InfoTopContainer>
                    <InfoBottomContainer>
                        <InfoItemContainer>
                            <span>id:</span>
                            <span className="productInfoValue">123</span>
                        </InfoItemContainer>
                        <InfoItemContainer>
                            <span>sales:</span>
                            <span className="productInfoValue">5123</span>
                        </InfoItemContainer>
                        <InfoItemContainer>
                            <span>active:</span>
                            <span className="productInfoValue">yes</span>
                        </InfoItemContainer>
                        <InfoItemContainer>
                            <span>in stock:</span>
                            <span className="productInfoValue">no</span>
                        </InfoItemContainer>
                    </InfoBottomContainer>
                </TopRightContainer>
            </ProductTopContainer>
            <ProductBottomContainer>
                <ProductForm>
                    <FormLeft>
                        <label>Product Name</label>
                        <input type="text" placeholder="Apple AirPod" />
                        <label>In Stock</label>
                        <select name="inStock" id="idStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </FormLeft>
                    <FormRight>
                        <ItemUpload>
                            <ItemUploadImg src="https://picsum.photos/200/300/?random=1" alt="upload-img" />
                            <label for="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </ItemUpload>
                        <ItemUpdateButton>Update</ItemUpdateButton>
                    </FormRight>
                </ProductForm>
            </ProductBottomContainer>
        </ItemContainer>
    )
}
export default AdminProduct;


export const ItemContainer = styled.div`
    flex: 4;
    padding: 20px;
`
export const ItemTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const ItemAddButton = styled.button`
    width: 80px;
    border: none;
    padding: 5px;
    background-color: indigo;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    font-size: 16px;
    text-transform: uppercase;
`
export const ItemShowImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: ${props => props.mr ? "20px" : "0px"};
`
export const ItemUploadImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    object-fit: cover;
    margin-right: 20px;
`
export const ItemUpdateButton = styled.button`
    border-radius: 5px;
    border: none;
    padding: 5px;
    cursor: pointer;
    background-color: midnightblue;
    color: white;
    font-weight: 600;
`
export const ItemUpload = styled.div`
    display: flex;
    align-items: center;
`
const ProductTopContainer = styled.div`
    display: flex;
`
const TopLeftContainer = styled.div`
    flex: 1;
`
const TopRightContainer = styled(TopLeftContainer)`
    padding: 20px;
    margin: 20px;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`
const InfoTopContainer = styled.div`
    display: flex;
    align-items: center;
    .productName {
        font-weight: 600;
    }
`
const InfoBottomContainer = styled.div`
    margin-top: 10px;
`
const InfoItemContainer = styled.div`
    width: 150px;
    display: flex;
    justify-content: space-between;
    .productInfoValue {
        font-weight: 300;
    }
`
const ProductBottomContainer = styled.div`
    padding: 20px;
    margin: 20px;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`
const ProductForm = styled.form`
    display: flex;
    justify-content: space-between;
`
const FormLeft = styled.div`
    display: flex;
    flex-direction: column;
    label {
        margin-bottom: 10px;
        color: gray;
    }
    input {
        margin-bottom: 10px;
        border: none;
        padding: 5px;
        border-bottom: 1px solid gray;
    }
    select{
        margin-bottom: 10px;
    }
`
const FormRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`