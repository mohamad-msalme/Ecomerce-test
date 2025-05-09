/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-useless-catch */
import { Product } from "@src/models/Product";
import { QueryFunctionContext, QueryKey } from "@tanstack/react-query";
import { axiosInstance } from "../client";

// Dummy data for fallback
const dummyProducts: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "Premium wireless headphones with noise cancellation",
    content:
      "Experience crystal clear sound with our premium wireless headphones",
    status: { value: "published", label: "Published" },
    images: [
      "https://picsum.photos/800/800?random=1",
      "https://picsum.photos/800/800?random=11",
      "https://picsum.photos/800/800?random=12",
      "https://picsum.photos/800/800?random=13",
    ],
    sku: "HP001",
    order: 1,
    quantity: 10,
    allow_checkout_when_out_of_stock: 0,
    with_storehouse_management: 1,
    is_featured: 1,
    brand_id: 1,
    is_variation: 0,
    sale_type: 0,
    price: 199.99,
    sale_price: 179.99,
    start_date: null,
    end_date: null,
    length: null,
    wide: 10,
    height: 10,
    weight: 1,
    tax_id: null,
    views: 0,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    stock_status: { value: "in_stock", label: "In Stock" },
    created_by_id: 1,
    created_by_type: "admin",
    image: "https://picsum.photos/800/800?random=1",
    product_type: { value: "simple", label: "Simple" },
    barcode: "123456789",
    cost_per_item: null,
    generate_license_code: 0,
    store_id: 1,
    approved_by: 1,
    have_sample: 0,
    sample_price: null,
    order_request: 0,
    per_unit: null,
    final_price: 179.99,
    reviews_count: 25,
    reviews_avg: 4.5,
    is_in_wishlist: 0,
    original_price: 199.99,
    front_sale_price: 179.99,
    slugable: {
      id: 1,
      key: "wireless-headphones",
      reference_type: "products",
      reference_id: 1,
      prefix: "products",
    },
    default_variation: {
      id: 1,
      product_id: 1,
      configurable_product_id: 1,
      is_default: 1,
    },
    product_collections: [],
    product_labels: [],
    store: {
      id: 1,
      name: "Sample Store",
      email: null,
      phone: "1234567890",
      address: "Sample Address",
      country: null,
      state: null,
      city: null,
      customer_id: 1,
      logo: null,
      description: "Sample Store Description",
      content: "Sample Store Content",
      status: { value: "active", label: "Active" },
      vendor_verified_at: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      zip_code: null,
      company: null,
      slugable: {
        id: 1,
        key: "sample-store",
        reference_type: "stores",
        reference_id: 1,
        prefix: "stores",
      },
    },
    categories: [],
    brand: [],
    reviews: [],
    variations: [],
    options: [],
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Feature-rich smartwatch with health monitoring",
    content: "Track your fitness and stay connected with our smartwatch",
    status: { value: "published", label: "Published" },
    images: [
      "https://picsum.photos/800/800?random=2",
      "https://picsum.photos/800/800?random=21",
      "https://picsum.photos/800/800?random=22",
      "https://picsum.photos/800/800?random=23",
    ],
    sku: "SW001",
    order: 2,
    quantity: 15,
    allow_checkout_when_out_of_stock: 0,
    with_storehouse_management: 1,
    is_featured: 1,
    brand_id: 1,
    is_variation: 0,
    sale_type: 0,
    price: 249.99,
    sale_price: null,
    start_date: null,
    end_date: null,
    length: null,
    wide: 10,
    height: 10,
    weight: 1,
    tax_id: null,
    views: 0,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    stock_status: { value: "in_stock", label: "In Stock" },
    created_by_id: 1,
    created_by_type: "admin",
    image: "https://picsum.photos/800/800?random=2",
    product_type: { value: "simple", label: "Simple" },
    barcode: "123456790",
    cost_per_item: null,
    generate_license_code: 0,
    store_id: 1,
    approved_by: 1,
    have_sample: 0,
    sample_price: null,
    order_request: 0,
    per_unit: null,
    final_price: 249.99,
    reviews_count: 30,
    reviews_avg: 4.7,
    is_in_wishlist: 0,
    original_price: 249.99,
    front_sale_price: 249.99,
    slugable: {
      id: 2,
      key: "smart-watch",
      reference_type: "products",
      reference_id: 2,
      prefix: "products",
    },
    default_variation: {
      id: 2,
      product_id: 2,
      configurable_product_id: 2,
      is_default: 1,
    },
    product_collections: [],
    product_labels: [],
    store: {
      id: 1,
      name: "Sample Store",
      email: null,
      phone: "1234567890",
      address: "Sample Address",
      country: null,
      state: null,
      city: null,
      customer_id: 1,
      logo: null,
      description: "Sample Store Description",
      content: "Sample Store Content",
      status: { value: "active", label: "Active" },
      vendor_verified_at: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      zip_code: null,
      company: null,
      slugable: {
        id: 1,
        key: "sample-store",
        reference_type: "stores",
        reference_id: 1,
        prefix: "stores",
      },
    },
    categories: [],
    brand: [],
    reviews: [],
    variations: [],
    options: [],
  },
  {
    id: 3,
    name: "Laptop Pro",
    description: "High-performance laptop for professionals",
    content: "Powerful laptop with latest processor and graphics",
    status: { value: "published", label: "Published" },
    images: [
      "https://picsum.photos/800/800?random=3",
      "https://picsum.photos/800/800?random=31",
      "https://picsum.photos/800/800?random=32",
      "https://picsum.photos/800/800?random=33",
    ],
    sku: "LP001",
    order: 3,
    quantity: 5,
    allow_checkout_when_out_of_stock: 0,
    with_storehouse_management: 1,
    is_featured: 1,
    brand_id: 1,
    is_variation: 0,
    sale_type: 0,
    price: 1299.99,
    sale_price: 1199.99,
    start_date: null,
    end_date: null,
    length: null,
    wide: 10,
    height: 10,
    weight: 1,
    tax_id: null,
    views: 0,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    stock_status: { value: "in_stock", label: "In Stock" },
    created_by_id: 1,
    created_by_type: "admin",
    image: "https://picsum.photos/800/800?random=3",
    product_type: { value: "simple", label: "Simple" },
    barcode: "123456791",
    cost_per_item: null,
    generate_license_code: 0,
    store_id: 1,
    approved_by: 1,
    have_sample: 0,
    sample_price: null,
    order_request: 0,
    per_unit: null,
    final_price: 1199.99,
    reviews_count: 45,
    reviews_avg: 4.8,
    is_in_wishlist: 0,
    original_price: 1299.99,
    front_sale_price: 1199.99,
    slugable: {
      id: 3,
      key: "laptop-pro",
      reference_type: "products",
      reference_id: 3,
      prefix: "products",
    },
    default_variation: {
      id: 3,
      product_id: 3,
      configurable_product_id: 3,
      is_default: 1,
    },
    product_collections: [],
    product_labels: [],
    store: {
      id: 1,
      name: "Sample Store",
      email: null,
      phone: "1234567890",
      address: "Sample Address",
      country: null,
      state: null,
      city: null,
      customer_id: 1,
      logo: null,
      description: "Sample Store Description",
      content: "Sample Store Content",
      status: { value: "active", label: "Active" },
      vendor_verified_at: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      zip_code: null,
      company: null,
      slugable: {
        id: 1,
        key: "sample-store",
        reference_type: "stores",
        reference_id: 1,
        prefix: "stores",
      },
    },
    categories: [],
    brand: [],
    reviews: [],
    variations: [],
    options: [],
  },
  {
    id: 4,
    name: "Smartphone X",
    description: "Latest smartphone with advanced camera",
    content: "Capture stunning photos with our latest smartphone",
    status: { value: "published", label: "Published" },
    images: [
      "https://picsum.photos/800/800?random=4",
      "https://picsum.photos/800/800?random=41",
      "https://picsum.photos/800/800?random=42",
      "https://picsum.photos/800/800?random=43",
    ],
    sku: "SP001",
    order: 4,
    quantity: 20,
    allow_checkout_when_out_of_stock: 0,
    with_storehouse_management: 1,
    is_featured: 1,
    brand_id: 1,
    is_variation: 0,
    sale_type: 0,
    price: 899.99,
    sale_price: null,
    start_date: null,
    end_date: null,
    length: null,
    wide: 10,
    height: 10,
    weight: 1,
    tax_id: null,
    views: 0,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    stock_status: { value: "in_stock", label: "In Stock" },
    created_by_id: 1,
    created_by_type: "admin",
    image: "https://picsum.photos/800/800?random=4",
    product_type: { value: "simple", label: "Simple" },
    barcode: "123456792",
    cost_per_item: null,
    generate_license_code: 0,
    store_id: 1,
    approved_by: 1,
    have_sample: 0,
    sample_price: null,
    order_request: 0,
    per_unit: null,
    final_price: 899.99,
    reviews_count: 60,
    reviews_avg: 4.6,
    is_in_wishlist: 0,
    original_price: 899.99,
    front_sale_price: 899.99,
    slugable: {
      id: 4,
      key: "smartphone-x",
      reference_type: "products",
      reference_id: 4,
      prefix: "products",
    },
    default_variation: {
      id: 4,
      product_id: 4,
      configurable_product_id: 4,
      is_default: 1,
    },
    product_collections: [],
    product_labels: [],
    store: {
      id: 1,
      name: "Sample Store",
      email: null,
      phone: "1234567890",
      address: "Sample Address",
      country: null,
      state: null,
      city: null,
      customer_id: 1,
      logo: null,
      description: "Sample Store Description",
      content: "Sample Store Content",
      status: { value: "active", label: "Active" },
      vendor_verified_at: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      zip_code: null,
      company: null,
      slugable: {
        id: 1,
        key: "sample-store",
        reference_type: "stores",
        reference_id: 1,
        prefix: "stores",
      },
    },
    categories: [],
    brand: [],
    reviews: [],
    variations: [],
    options: [],
  },
  {
    id: 5,
    name: "Wireless Earbuds",
    description: "Compact wireless earbuds with great sound",
    content: "Enjoy your music with our wireless earbuds",
    status: { value: "published", label: "Published" },
    images: [
      "https://picsum.photos/800/800?random=5",
      "https://picsum.photos/800/800?random=51",
      "https://picsum.photos/800/800?random=52",
      "https://picsum.photos/800/800?random=53",
    ],
    sku: "EB001",
    order: 5,
    quantity: 30,
    allow_checkout_when_out_of_stock: 0,
    with_storehouse_management: 1,
    is_featured: 1,
    brand_id: 1,
    is_variation: 0,
    sale_type: 0,
    price: 129.99,
    sale_price: 99.99,
    start_date: null,
    end_date: null,
    length: null,
    wide: 10,
    height: 10,
    weight: 1,
    tax_id: null,
    views: 0,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    stock_status: { value: "in_stock", label: "In Stock" },
    created_by_id: 1,
    created_by_type: "admin",
    image: "https://picsum.photos/800/800?random=5",
    product_type: { value: "simple", label: "Simple" },
    barcode: "123456793",
    cost_per_item: null,
    generate_license_code: 0,
    store_id: 1,
    approved_by: 1,
    have_sample: 0,
    sample_price: null,
    order_request: 0,
    per_unit: null,
    final_price: 99.99,
    reviews_count: 40,
    reviews_avg: 4.4,
    is_in_wishlist: 0,
    original_price: 129.99,
    front_sale_price: 99.99,
    slugable: {
      id: 5,
      key: "wireless-earbuds",
      reference_type: "products",
      reference_id: 5,
      prefix: "products",
    },
    default_variation: {
      id: 5,
      product_id: 5,
      configurable_product_id: 5,
      is_default: 1,
    },
    product_collections: [],
    product_labels: [],
    store: {
      id: 1,
      name: "Sample Store",
      email: null,
      phone: "1234567890",
      address: "Sample Address",
      country: null,
      state: null,
      city: null,
      customer_id: 1,
      logo: null,
      description: "Sample Store Description",
      content: "Sample Store Content",
      status: { value: "active", label: "Active" },
      vendor_verified_at: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      zip_code: null,
      company: null,
      slugable: {
        id: 1,
        key: "sample-store",
        reference_type: "stores",
        reference_id: 1,
        prefix: "stores",
      },
    },
    categories: [],
    brand: [],
    reviews: [],
    variations: [],
    options: [],
  },
  {
    id: 6,
    name: "Gaming Mouse",
    description: "High-precision gaming mouse with RGB lighting",
    content: "Enhance your gaming experience with our gaming mouse",
    status: { value: "published", label: "Published" },
    images: [
      "https://picsum.photos/800/800?random=6",
      "https://picsum.photos/800/800?random=61",
      "https://picsum.photos/800/800?random=62",
      "https://picsum.photos/800/800?random=63",
    ],
    sku: "GM001",
    order: 6,
    quantity: 25,
    allow_checkout_when_out_of_stock: 0,
    with_storehouse_management: 1,
    is_featured: 1,
    brand_id: 1,
    is_variation: 0,
    sale_type: 0,
    price: 79.99,
    sale_price: null,
    start_date: null,
    end_date: null,
    length: null,
    wide: 10,
    height: 10,
    weight: 1,
    tax_id: null,
    views: 0,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    stock_status: { value: "in_stock", label: "In Stock" },
    created_by_id: 1,
    created_by_type: "admin",
    image: "https://picsum.photos/800/800?random=6",
    product_type: { value: "simple", label: "Simple" },
    barcode: "123456794",
    cost_per_item: null,
    generate_license_code: 0,
    store_id: 1,
    approved_by: 1,
    have_sample: 0,
    sample_price: null,
    order_request: 0,
    per_unit: null,
    final_price: 79.99,
    reviews_count: 35,
    reviews_avg: 4.7,
    is_in_wishlist: 0,
    original_price: 79.99,
    front_sale_price: 79.99,
    slugable: {
      id: 6,
      key: "gaming-mouse",
      reference_type: "products",
      reference_id: 6,
      prefix: "products",
    },
    default_variation: {
      id: 6,
      product_id: 6,
      configurable_product_id: 6,
      is_default: 1,
    },
    product_collections: [],
    product_labels: [],
    store: {
      id: 1,
      name: "Sample Store",
      email: null,
      phone: "1234567890",
      address: "Sample Address",
      country: null,
      state: null,
      city: null,
      customer_id: 1,
      logo: null,
      description: "Sample Store Description",
      content: "Sample Store Content",
      status: { value: "active", label: "Active" },
      vendor_verified_at: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      zip_code: null,
      company: null,
      slugable: {
        id: 1,
        key: "sample-store",
        reference_type: "stores",
        reference_id: 1,
        prefix: "stores",
      },
    },
    categories: [],
    brand: [],
    reviews: [],
    variations: [],
    options: [],
  },
  {
    id: 7,
    name: "Mechanical Keyboard",
    description: "RGB mechanical keyboard with custom switches",
    content: "Type in style with our mechanical keyboard",
    status: { value: "published", label: "Published" },
    images: [
      "https://picsum.photos/800/800?random=7",
      "https://picsum.photos/800/800?random=71",
      "https://picsum.photos/800/800?random=72",
      "https://picsum.photos/800/800?random=73",
    ],
    sku: "KB001",
    order: 7,
    quantity: 15,
    allow_checkout_when_out_of_stock: 0,
    with_storehouse_management: 1,
    is_featured: 1,
    brand_id: 1,
    is_variation: 0,
    sale_type: 0,
    price: 149.99,
    sale_price: 129.99,
    start_date: null,
    end_date: null,
    length: null,
    wide: 10,
    height: 10,
    weight: 1,
    tax_id: null,
    views: 0,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    stock_status: { value: "in_stock", label: "In Stock" },
    created_by_id: 1,
    created_by_type: "admin",
    image: "https://picsum.photos/800/800?random=7",
    product_type: { value: "simple", label: "Simple" },
    barcode: "123456795",
    cost_per_item: null,
    generate_license_code: 0,
    store_id: 1,
    approved_by: 1,
    have_sample: 0,
    sample_price: null,
    order_request: 0,
    per_unit: null,
    final_price: 129.99,
    reviews_count: 50,
    reviews_avg: 4.8,
    is_in_wishlist: 0,
    original_price: 149.99,
    front_sale_price: 129.99,
    slugable: {
      id: 7,
      key: "mechanical-keyboard",
      reference_type: "products",
      reference_id: 7,
      prefix: "products",
    },
    default_variation: {
      id: 7,
      product_id: 7,
      configurable_product_id: 7,
      is_default: 1,
    },
    product_collections: [],
    product_labels: [],
    store: {
      id: 1,
      name: "Sample Store",
      email: null,
      phone: "1234567890",
      address: "Sample Address",
      country: null,
      state: null,
      city: null,
      customer_id: 1,
      logo: null,
      description: "Sample Store Description",
      content: "Sample Store Content",
      status: { value: "active", label: "Active" },
      vendor_verified_at: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      zip_code: null,
      company: null,
      slugable: {
        id: 1,
        key: "sample-store",
        reference_type: "stores",
        reference_id: 1,
        prefix: "stores",
      },
    },
    categories: [],
    brand: [],
    reviews: [],
    variations: [],
    options: [],
  },
  {
    id: 8,
    name: "4K Monitor",
    description: "27-inch 4K monitor with HDR support",
    content: "Experience stunning visuals with our 4K monitor",
    status: { value: "published", label: "Published" },
    images: [
      "https://picsum.photos/800/800?random=8",
      "https://picsum.photos/800/800?random=81",
      "https://picsum.photos/800/800?random=82",
      "https://picsum.photos/800/800?random=83",
    ],
    sku: "MN001",
    order: 8,
    quantity: 8,
    allow_checkout_when_out_of_stock: 0,
    with_storehouse_management: 1,
    is_featured: 1,
    brand_id: 1,
    is_variation: 0,
    sale_type: 0,
    price: 399.99,
    sale_price: null,
    start_date: null,
    end_date: null,
    length: null,
    wide: 10,
    height: 10,
    weight: 1,
    tax_id: null,
    views: 0,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    stock_status: { value: "in_stock", label: "In Stock" },
    created_by_id: 1,
    created_by_type: "admin",
    image: "https://picsum.photos/800/800?random=8",
    product_type: { value: "simple", label: "Simple" },
    barcode: "123456796",
    cost_per_item: null,
    generate_license_code: 0,
    store_id: 1,
    approved_by: 1,
    have_sample: 0,
    sample_price: null,
    order_request: 0,
    per_unit: null,
    final_price: 399.99,
    reviews_count: 28,
    reviews_avg: 4.6,
    is_in_wishlist: 0,
    original_price: 399.99,
    front_sale_price: 399.99,
    slugable: {
      id: 8,
      key: "4k-monitor",
      reference_type: "products",
      reference_id: 8,
      prefix: "products",
    },
    default_variation: {
      id: 8,
      product_id: 8,
      configurable_product_id: 8,
      is_default: 1,
    },
    product_collections: [],
    product_labels: [],
    store: {
      id: 1,
      name: "Sample Store",
      email: null,
      phone: "1234567890",
      address: "Sample Address",
      country: null,
      state: null,
      city: null,
      customer_id: 1,
      logo: null,
      description: "Sample Store Description",
      content: "Sample Store Content",
      status: { value: "active", label: "Active" },
      vendor_verified_at: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      zip_code: null,
      company: null,
      slugable: {
        id: 1,
        key: "sample-store",
        reference_type: "stores",
        reference_id: 1,
        prefix: "stores",
      },
    },
    categories: [],
    brand: [],
    reviews: [],
    variations: [],
    options: [],
  },
  {
    id: 9,
    name: "External SSD",
    description: "1TB external SSD with USB-C connection",
    content: "Fast and portable storage solution",
    status: { value: "published", label: "Published" },
    images: [
      "https://picsum.photos/800/800?random=9",
      "https://picsum.photos/800/800?random=91",
      "https://picsum.photos/800/800?random=92",
      "https://picsum.photos/800/800?random=93",
    ],
    sku: "SS001",
    order: 9,
    quantity: 20,
    allow_checkout_when_out_of_stock: 0,
    with_storehouse_management: 1,
    is_featured: 1,
    brand_id: 1,
    is_variation: 0,
    sale_type: 0,
    price: 129.99,
    sale_price: 99.99,
    start_date: null,
    end_date: null,
    length: null,
    wide: 10,
    height: 10,
    weight: 1,
    tax_id: null,
    views: 0,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    stock_status: { value: "in_stock", label: "In Stock" },
    created_by_id: 1,
    created_by_type: "admin",
    image: "https://picsum.photos/800/800?random=9",
    product_type: { value: "simple", label: "Simple" },
    barcode: "123456797",
    cost_per_item: null,
    generate_license_code: 0,
    store_id: 1,
    approved_by: 1,
    have_sample: 0,
    sample_price: null,
    order_request: 0,
    per_unit: null,
    final_price: 99.99,
    reviews_count: 42,
    reviews_avg: 4.7,
    is_in_wishlist: 0,
    original_price: 129.99,
    front_sale_price: 99.99,
    slugable: {
      id: 9,
      key: "external-ssd",
      reference_type: "products",
      reference_id: 9,
      prefix: "products",
    },
    default_variation: {
      id: 9,
      product_id: 9,
      configurable_product_id: 9,
      is_default: 1,
    },
    product_collections: [],
    product_labels: [],
    store: {
      id: 1,
      name: "Sample Store",
      email: null,
      phone: "1234567890",
      address: "Sample Address",
      country: null,
      state: null,
      city: null,
      customer_id: 1,
      logo: null,
      description: "Sample Store Description",
      content: "Sample Store Content",
      status: { value: "active", label: "Active" },
      vendor_verified_at: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      zip_code: null,
      company: null,
      slugable: {
        id: 1,
        key: "sample-store",
        reference_type: "stores",
        reference_id: 1,
        prefix: "stores",
      },
    },
    categories: [],
    brand: [],
    reviews: [],
    variations: [],
    options: [],
  },
  {
    id: 10,
    name: "Webcam Pro",
    description: "4K webcam with built-in microphone",
    content: "Professional quality video calls with our webcam",
    status: { value: "published", label: "Published" },
    images: [
      "https://picsum.photos/800/800?random=10",
      "https://picsum.photos/800/800?random=101",
      "https://picsum.photos/800/800?random=102",
      "https://picsum.photos/800/800?random=103",
    ],
    sku: "WC001",
    order: 10,
    quantity: 12,
    allow_checkout_when_out_of_stock: 0,
    with_storehouse_management: 1,
    is_featured: 1,
    brand_id: 1,
    is_variation: 0,
    sale_type: 0,
    price: 89.99,
    sale_price: null,
    start_date: null,
    end_date: null,
    length: null,
    wide: 10,
    height: 10,
    weight: 1,
    tax_id: null,
    views: 0,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    stock_status: { value: "in_stock", label: "In Stock" },
    created_by_id: 1,
    created_by_type: "admin",
    image: "https://picsum.photos/800/800?random=10",
    product_type: { value: "simple", label: "Simple" },
    barcode: "123456798",
    cost_per_item: null,
    generate_license_code: 0,
    store_id: 1,
    approved_by: 1,
    have_sample: 0,
    sample_price: null,
    order_request: 0,
    per_unit: null,
    final_price: 89.99,
    reviews_count: 38,
    reviews_avg: 4.5,
    is_in_wishlist: 0,
    original_price: 89.99,
    front_sale_price: 89.99,
    slugable: {
      id: 10,
      key: "webcam-pro",
      reference_type: "products",
      reference_id: 10,
      prefix: "products",
    },
    default_variation: {
      id: 10,
      product_id: 10,
      configurable_product_id: 10,
      is_default: 1,
    },
    product_collections: [],
    product_labels: [],
    store: {
      id: 1,
      name: "Sample Store",
      email: null,
      phone: "1234567890",
      address: "Sample Address",
      country: null,
      state: null,
      city: null,
      customer_id: 1,
      logo: null,
      description: "Sample Store Description",
      content: "Sample Store Content",
      status: { value: "active", label: "Active" },
      vendor_verified_at: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      zip_code: null,
      company: null,
      slugable: {
        id: 1,
        key: "sample-store",
        reference_type: "stores",
        reference_id: 1,
        prefix: "stores",
      },
    },
    categories: [],
    brand: [],
    reviews: [],
    variations: [],
    options: [],
  },
];

const dummyResponse = {
  id: 1,
  current_page: 1,
  first_page_url: "",
  from: 1,
  last_page: 1,
  last_page_url: "",
  next_page_url: "",
  path: "",
  per_page: 10,
  prev_page_url: null,
  to: 10,
  total: 10,
  data: dummyProducts,
};

type TFilter = {
  cat: string | null;
  sortBy: string | null;
};

export type SuccessResponse = {
  code: number;
  data: {
    id: number;
    current_page: number;
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
    data: Product[];
  };
  message: string;
  response: string;
};

export const ProductsQuery = (filter?: Record<string, string | null>) => ({
  queryKey: ["ProductsQuery", filter],
  queryFn: async (context: QueryFunctionContext<QueryKey, number>) =>
    getProducts(context),
});

const getProducts = async (context: QueryFunctionContext<QueryKey, number>) => {
  try {
    const { queryKey, pageParam } = context;
    const [_key, { sortBy, cat }] = queryKey as [string, TFilter];
    const sortByValue = sortBy === "DEFF" ? undefined : sortBy;
    const sortByQuery = sortByValue ? `&sort-by=${sortByValue}` : "";
    const data = await axiosInstance.post<SuccessResponse>(
      `products/all?page=${pageParam}${sortByQuery}`,
      {
        categories: cat ? [cat] : [],
      }
    );
    return data.data.data;
  } catch (error) {
    console.error("Error fetching products, returning dummy data:", error);
    return dummyResponse;
  }
};
