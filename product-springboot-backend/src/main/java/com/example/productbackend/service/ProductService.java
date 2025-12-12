package com.example.productbackend.service;

import com.example.productbackend.model.Product;
import com.example.productbackend.repo.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private final ProductRepository repo;

    public ProductService(ProductRepository repo) {
        this.repo = repo;
    }

    public List<Product> getAll() {
        return repo.findAll();
    }

    public Optional<Product> getById(Long id) {
        return repo.findById(id);
    }

    public Product create(Product product) {
        if (repo.existsById(product.getProductId())) {
            throw new IllegalArgumentException("Product with id already exists");
        }
        return repo.save(product);
    }

    public Product update(Long id, Product product) {
        if (!repo.existsById(id)) {
            throw new IllegalArgumentException("Product not found");
        }
        product.setProductId(id);
        return repo.save(product);
    }

    public void delete(Long id) {
        if (!repo.existsById(id)) {
            throw new IllegalArgumentException("Product not found");
        }
        repo.deleteById(id);
    }

    public List<Product> resetDefaults() {
        repo.deleteAll();
        repo.saveAll(List.of(
            new Product(101L, "Laptop", 10, 50000.0),
            new Product(102L, "Mouse", 25, 500.0),
            new Product(103L, "Keyboard", 15, 1200.0)
        ));
        return repo.findAll();
    }
}
