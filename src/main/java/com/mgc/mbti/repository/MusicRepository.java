package com.mgc.mbti.repository;

import com.mgc.mbti.domain.Music;
import com.mgc.mbti.domain.Playlist;
import com.mgc.mbti.repository.customRepo.MusicCustomRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Map;

public interface MusicRepository extends JpaRepository<Music, Long> , MusicCustomRepository {
}
