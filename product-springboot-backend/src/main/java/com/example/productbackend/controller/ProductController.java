package com.example.productbackend.controller;

import com.example.productbackend.model.Product;
import com.example.productbackend.service.ProductService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products/")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {

    private final ProductService svc;

    public ProductController(ProductService svc) {
        this.svc = svc;
    }

    @GetMapping // GET --> http://localhost:8080/api/products
    @CrossOrigin(origins = "http://localhost:5173")
    public List<Product> getAll() {
        return svc.getAll();
    }

    @GetMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:5173")
    public ResponseEntity<Product> getById(@PathVariable String id) {
        return svc.getById(id).map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    @CrossOrigin(origins = "http://localhost:5173")
    public ResponseEntity<?> create(@Valid @RequestBody Product product) {
        try {
            Product saved = svc.create(product);
            return ResponseEntity.status(201).body(saved);
        } catch (IllegalArgumentException ex) {
            return ResponseEntity.status(409).body(ex.getMessage());
        }
    }

    @PutMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:5173")
    public ResponseEntity<?> update(@PathVariable String id, @Valid @RequestBody Product product) {
        try {
            Product updated = svc.update(id, product);
            return ResponseEntity.ok(updated);
        } catch (IllegalArgumentException ex) {
            return ResponseEntity.status(404).body(ex.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:5173")
    public ResponseEntity<?> delete(@PathVariable String id) {
        try {
            svc.delete(id);
            return ResponseEntity.noContent().build();
        } catch (IllegalArgumentException ex) {
            return ResponseEntity.status(404).body(ex.getMessage());
        }
    }

    @PostMapping("/reset")
    @CrossOrigin(origins = "http://localhost:5173")
    public List<Product> reset() {
        return svc.resetDefaults();
    }
}
