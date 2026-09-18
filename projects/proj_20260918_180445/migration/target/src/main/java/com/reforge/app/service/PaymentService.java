package com.reforge.app.service;

import org.springframework.stereotype.Service;
import java.math.BigDecimal;
import java.util.UUID;

@Service
public class PaymentService {
    public String processPayment(Long userId, BigDecimal amount) {
        if (amount == null || amount.compareTo(BigDecimal.ZERO) <= 0) {
            throw new IllegalArgumentException("Payment amount must be greater than zero");
        }
        // Process transaction
        return "txn_" + UUID.randomUUID().toString().substring(0, 8);
    }
}