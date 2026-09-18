package com.reforge.app.service;

import com.reforge.app.model.Order;
import com.reforge.app.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private PaymentService paymentService;

    @Transactional
    public Order createOrder(Order order) {
        String txnId = paymentService.processPayment(order.getUserId(), order.getAmount());
        order.setTransactionId(txnId);
        order.setStatus("CONFIRMED");
        return orderRepository.save(order);
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Optional<Order> getOrderById(Long id) {
        return orderRepository.findById(id);
    }
}