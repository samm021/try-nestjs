import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {};

  @Post()
  addProduct(@Body('title') pTitle: string, @Body('description') pDesc: string, @Body('price') pPrice: number) {
    const id = this.productsService.insertProduct(pTitle, pDesc, pPrice);
    return { id };
  };

  @Get()
  getProducts() {
    return this.productsService.getProducts();
  };

  @Get(':id')
  getProduct(@Param('id') pId: string) {
    return this.productsService.getProduct(pId);
  }

  @Patch(':id')
  updateProduct(@Param('id') pId: string, @Body('title') pTitle: string, @Body('description') pDesc: string, @Body('price') pPrice: number) {
    return this.productsService.updateProduct(pId, pTitle, pDesc, pPrice);
  }

  @Delete(':id')
  deleteProduct(@Param('id') pId: string) {
    return this.productsService.deleteProduct(pId)
  }
}